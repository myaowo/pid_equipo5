from django.http import JsonResponse
from .models import Articulo  # Asegúrate de tener este modelo

def obtener_articulos(request):
    articulos = list(Articulo.objects.values())
    return JsonResponse(articulos, safe=False)

def obtener_articulo_por_id(request, id):
    try:
        articulo = Articulo.objects.get(pk=id)
        data = {
            'id': articulo.id,
            'titulo': articulo.titulo,
            'contenido': articulo.contenido,
            # agrega más campos si es necesario
        }
        return JsonResponse(data)
    except Articulo.DoesNotExist:
        return JsonResponse({'error': 'Artículo no encontrado'}, status=404)
