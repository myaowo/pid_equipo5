# serializers.py
from rest_framework import serializers
from .models import Servicio

class ServicioSerializer(serializers.ModelSerializer):
    imagen = serializers.ImageField(use_url=True)  # Esto es importante para que el campo 'imagen' se serialice como una URL accesible

    class Meta:
        model = Servicio
        fields = ['id', 'nombre', 'descripcion', 'imagen']
