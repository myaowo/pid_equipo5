# contacto/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.contacto_api, name='contacto_api'),
]
