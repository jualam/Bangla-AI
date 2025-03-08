from django.urls import path
from . import views

urlpatterns = [
    path('/translate-en-bn', views.translate_text_en_bn,name='translate_text_en_bn'),
    path('/translate-bn-en', views.translate_text_bn_en,name='translate_text_bn-en'),
]
