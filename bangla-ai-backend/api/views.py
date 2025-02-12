import openai
from django.conf import settings
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import TranslationSerializer

@api_view(['POST'])
def translate_text(request):
    serializer = TranslationSerializer(data=request.data)
    
    if serializer.is_valid():
        input_text = serializer.validated_data['text']
        
        try:
            # OpenAI API call for translation
            response = openai.ChatCompletion.create(
                model="gpt-4",
                api_key=settings.OPENAI_API_KEY,
                messages=[
                    {"role": "system", "content": "You are a helpful translator."},
                    {"role": "user", "content": f"Translate the following text into Bangla:\n{input_text}"}
                ]
            )
            
            translated_text = response['choices'][0]['message']['content']
            return Response({'translatedText': translated_text})

        except Exception as e:
            return Response({'error': str(e)}, status=400)
    
    return Response(serializer.errors, status=400)
