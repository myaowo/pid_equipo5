# contacto/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MensajeContactoSerializer

@api_view(['POST'])
def contacto_api(request):
    serializer = MensajeContactoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"success": "Mensaje enviado correctamente"})
    return Response(serializer.errors, status=400)
