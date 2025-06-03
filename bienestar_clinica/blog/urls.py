from django.urls import path
from . import views

urlpatterns = [
    path('', views.obtener_articulos, name='obtener_articulos'),
    path('<int:id>/', views.obtener_articulo_por_id, name='obtener_articulo_por_id'),
]
