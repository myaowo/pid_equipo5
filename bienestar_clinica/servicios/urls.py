# urls.py
from django.urls import path
from .views import ServicioListAPIView

urlpatterns = [
    path('', ServicioListAPIView.as_view(), name='servicios'),
]
