# reservas/models.py
from django.db import models
from servicios.models import Servicio  

class Reserva(models.Model):
    servicio = models.ForeignKey(Servicio, on_delete=models.CASCADE)
    nombre_completo = models.CharField(max_length=255)
    email = models.EmailField()
    telefono = models.CharField(max_length=15)
    fecha = models.DateField()
    hora = models.TimeField()
    comentarios = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Reserva para {self.nombre_completo} - {self.servicio.nombre}"
