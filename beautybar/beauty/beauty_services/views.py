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

def locations(request):
    response = requests.get('https://api.postcodes.io/postcodes/RH68GR')

    address = response.json()
    return render(request, "index.html", {"address": address})
