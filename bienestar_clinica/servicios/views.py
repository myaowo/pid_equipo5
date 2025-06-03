# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Servicio
from .serializers import ServicioSerializer

class ServicioListAPIView(APIView):
    def get(self, request, *args, **kwargs):
        servicios = Servicio.objects.all()  # Obtiene todos los servicios
        serializer = ServicioSerializer(servicios, many=True)  # Serializa todos los servicios
        return Response(serializer.data, status=status.HTTP_200_OK)
