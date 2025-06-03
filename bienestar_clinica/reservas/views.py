# reservas/views.py
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Reserva
from .serializers import ReservaSerializer
from servicios.models import Servicio
from servicios.serializers import ServicioSerializer  # Serializador para los servicios

class ReservaViewSet(viewsets.ModelViewSet):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer

@api_view(['GET'])
def get_servicios(request):
    servicios = Servicio.objects.all()
    serializer = ServicioSerializer(servicios, many=True)
    return Response(serializer.data)
