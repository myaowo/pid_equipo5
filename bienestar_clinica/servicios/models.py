from django.db import models

class Servicio(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    imagen = models.ImageField(upload_to='imagenes/', default='default.jpg')


    def __str__(self):
        return self.nombre
