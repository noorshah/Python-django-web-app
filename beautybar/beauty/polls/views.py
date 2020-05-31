from django.shortcuts import HttpResponse
from django.shortcuts import render

def index(request):
    return HttpResponse("beauty.")

def beauty(request):
    return render(request, 'beauty.html', {})

# Create your views here.
