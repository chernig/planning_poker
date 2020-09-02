from django.shortcuts import render, HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Story


def home_view(request):
    return HttpResponse('<p>Test</p>')