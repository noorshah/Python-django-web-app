from django.urls import path
from beauty_services import views

urlpatterns = [
    path('', views.beauty_services, name='beauty_services'),
    path('contact_us',views.contact_us,name='contact_us')
]