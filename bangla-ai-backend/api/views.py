from django.http import StreamingHttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
import openai
from django.conf import settings
import re

# Function for chunking text
def split_text_into_chunks(text, max_tokens=500):  # Reduced max_tokens for better handling
    sentences = re.split(r'(?<=[।.!?]) +', text)  
    chunks = []
    current_chunk = ""

    for sentence in sentences:
        if len(current_chunk) + len(sentence) <= max_tokens:
            current_chunk += sentence + " "
        else:
            chunks.append(current_chunk.strip())
            current_chunk = sentence + " "

    if current_chunk:
        chunks.append(current_chunk.strip())

    return chunks

@api_view(['POST'])
def translate_text_en_bn(request):
    text = request.data.get('text', '')

    if not text:
        return Response({
            "message": "Invalid input",
            "success": False,
            "errors": "Text is required",
            "code": 400
        }, status=400)

    try:
        # Initialize OpenAI client
        client = openai.OpenAI(api_key=settings.OPENAI_API_KEY)

        # Split text into chunks
        chunks = split_text_into_chunks(text)

        translated_chunks = []
        for chunk in chunks:
            response = client.chat.completions.create(
                model="gpt-4-turbo",
                messages=[
                    {"role": "system", "content": "তুমি একজন বাংলা সংবাদ অনুবাদক। সংবাদ ভাষায় অনুবাদ করবে।"},
                    {"role": "user", "content": f"এই ইংরেজি সংবাদটি বাংলায় অনুবাদ কর:\n{chunk}"}
                ],
                max_tokens=1000  # Ensure response fits within limit
            )

            translated_text = response.choices[0].message.content.strip()
            translated_chunks.append(translated_text)

        # Join all chunks to form the full translated text
        full_translation = " ".join(translated_chunks)

        return Response({
            "message": "Translation Successful",
            "success": True,
            "translated_text": full_translation,
            "code": 200
        }, status=200)

    except Exception as e:
        return Response({
            "message": "Translation Failed",
            "success": False,
            "error": str(e),
            "code": 400
        }, status=400)
    
    
@api_view(['POST'])
def translate_text_bn_en(request):
    text = request.data.get('text', '')

    if not text:
        return Response({
            "message": "Invalid input",
            "success": False,
            "errors": "Text is required",
            "code": 400
        }, status=400)

    try:
        # Initialize OpenAI client
        client = openai.OpenAI(api_key=settings.OPENAI_API_KEY)

        # Split the text into smaller chunks
        chunks = split_text_into_chunks(text)

        # Stream the translated text to the frontend
        def generate():
            for chunk in chunks:
                response = client.chat.completions.create(
                    model="gpt-4-turbo",
                    messages=[
                        {"role": "system", "content": "You are a professional Bengali news translator. Translate into formal, clear, and professional English suitable for newspapers. Maintain the tone and style of a news article."},
                        {"role": "user", "content": f"Translate this Bengali news into English:\n{chunk}"}
                    ],
                    max_tokens=2000,
                    stream=True
                )

                for chunk in response:
                    if chunk.choices[0].delta.content:
                        yield chunk.choices[0].delta.content

        return StreamingHttpResponse(generate(), content_type='text/plain')

    except Exception as e:
        return Response({
            "message": "Translation Failed",
            "success": False,
            "error": str(e),
            "code": 400
        }, status=400)