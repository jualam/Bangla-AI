from django.http import StreamingHttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
import openai
from django.conf import settings
import re

# Original Code

# function for chunking
def split_text_into_chunks(text, max_tokens=2500):
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

# New Code for testing

# def split_text_into_chunks(text, max_tokens=2500):
#     # Split by sentences
#     sentences = re.split(r'(?<=[।.!?]) +', text)
#     chunks = []
#     current_chunk = []
#     current_tokens = 0

#     for sentence in sentences:
#         # Estimate the number of tokens in the sentence
#         num_tokens = len(sentence.split())  # Rough estimate based on word count
#         if current_tokens + num_tokens <= max_tokens:
#             current_chunk.append(sentence)
#             current_tokens += num_tokens
#         else:
#             chunks.append(" ".join(current_chunk))
#             current_chunk = [sentence]
#             current_tokens = num_tokens

#     if current_chunk:
#         chunks.append(" ".join(current_chunk))

#     return chunks


# using tiktoken


# import tiktoken  # For token count estimation

# tokenizer = tiktoken.get_encoding("gpt2")

# def get_token_count(text):
#     """Returns the number of tokens for the input text."""
#     return len(tokenizer.encode(text))

# def split_text_into_chunks(text, max_tokens=2500):
#     sentences = re.split(r'(?<=[।.!?]) +', text)
#     chunks = []
#     current_chunk = []
#     current_tokens = 0

#     for sentence in sentences:
#         # Estimate the number of tokens in the sentence
#         sentence_tokens = get_token_count(sentence)
#         if current_tokens + sentence_tokens <= max_tokens:
#             current_chunk.append(sentence)
#             current_tokens += sentence_tokens
#         else:
#             # If adding the sentence exceeds the limit, store the current chunk and start a new one
#             chunks.append(" ".join(current_chunk))
#             current_chunk = [sentence]
#             current_tokens = sentence_tokens

#     if current_chunk:
#         chunks.append(" ".join(current_chunk))

#     return chunks





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
            max_tokens=2500,  # Limit the output for faster response
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
        





###################################################################
    
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