# reservas/urls.py
from django.urls import path, include
from .views import ReservaViewSet, get_servicios
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'reservas', ReservaViewSet)

urlpatterns = [
    path('api/servicios/', get_servicios, name='get_servicios'),
    path('api/', include(router.urls)),
]
