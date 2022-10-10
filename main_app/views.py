from django.shortcuts import render
from .models import Question

# Create your views here

def homePage(request):
    questions = Question.objects.all().order_by('-created_at')
    context ={
          'questions': questions
    }
    return render(request,'homepage.html', context)