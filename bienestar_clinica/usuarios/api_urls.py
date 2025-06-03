from django.urls import path
from .api_views import RegistroAPI ,LoginAPI

urlpatterns = [
    path('registro/', RegistroAPI.as_view(), name='registro'),
    path("login/", LoginAPI.as_view(), name="login_api"),
]
