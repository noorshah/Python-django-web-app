import requests
from django.shortcuts import render
from beauty_services.models import BeautyServices

def beauty_services(request):
    service=BeautyServices.services
    context = {
        'service': service
    }
    return render(request, 'index.html', context)

def contact_us(request):
    return render(request,'contact_us.html',{})

def services(request):
    return render(request,'services.html',{})
