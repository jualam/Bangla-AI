from django.http import StreamingHttpResponse
from rest_framework.decorators import api_view
import openai
from django.conf import settings

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

        # Stream the translation response
        response = client.chat.completions.create(
            model="gpt-4-turbo",  # Use GPT-4 Turbo for faster performance
            messages=[
                {"role": "system", "content": "তুমি একজন বাংলা সংবাদ অনুবাদক। সংবাদ ভাষায় অনুবাদ করবে।"},
                {"role": "user", "content": f"এই ইংরেজি সংবাদটি বাংলায় অনুবাদ কর:\n{text}"}
            ],
            max_tokens=2000,  # Limit the output for faster response
            stream=True  # Enable streaming for faster delivery
        )

        # Stream the translated text to the frontend
        def generate():
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
        
        
        
        
# Bangla to English Translation API

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

        # Stream the translation response
        response = client.chat.completions.create(
            model="gpt-4-turbo",  # Use GPT-4 Turbo for faster performance
            messages=[
                {"role": "system", "content": "You are a Bengali news translator. Translate in a formal news style."},
                {"role": "user", "content": f"Translate this Bengali news into English:\n{text}"}
            ],
            max_tokens=2000,  # Limit the output for faster response
            stream=True  # Enable streaming for faster delivery
        )

        # Stream the translated text to the frontend
        def generate():
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