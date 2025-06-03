from django.db import models
from datetime import datetime

def default_created_at():
    return datetime.now()

class Articulo(models.Model):
    titulo = models.CharField(max_length=200, default="Sin título")
    resumen = models.TextField(verbose_name="Breve resumen", default="", blank=True)
    categoria = models.CharField(max_length=100, default="General", blank=True)
    autor = models.CharField(max_length=100, default="Anónimo", blank=True)
    imagen = models.ImageField(upload_to='blogs/', null=True, blank=True)
    destacado = models.BooleanField(default=False)
    contenido = models.TextField(verbose_name="Artículo completo", default="", blank=True)
    created_at = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return self.titulo
