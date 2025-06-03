# reservas/serializers.py
from rest_framework import serializers
from .models import Reserva
from servicios.models import Servicio

class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reserva
        fields = ['id', 'servicio', 'nombre_completo', 'email', 'telefono', 'fecha', 'hora', 'comentarios']

