from ast import Try
from django.shortcuts import render, redirect
from django.contrib.auth import login
from .models import Question
from .forms import RegisterUserForm, LoginForm
# Create your views here

def registerPage(request):
    form = RegisterUserForm()

    if request.method == 'POST':
        try:
            form = RegisterUserForm(request.POST)
            if form.is_valid():
                user = form.save()
                login(request, user)
                return redirect('index')

        except Exception as e:
            print(e)
            raise

    context = {
        'form': form

    }
    return render(request,'register.html', context)


# def loginPage(request):
#     form = LoginForm()

#     if request.method == 'POST':
#         try:
#             form = LoginForm(data=request.POST)
#             if form.is_valid():
#                 user=form.get_user()
#                 login(request, user)
#                 return redirect('index')
#         except Exception as e:
#             print(e)
#             raise

#     context ={'form': form}
#     return render(request, 'login.html', context)

def homePage(request):
    questions = Question.objects.all().order_by('-created_at')
    context ={
          'questions': questions
    }
    return render(request,'homepage.html', context)

def questionPage(request, id):
    return None