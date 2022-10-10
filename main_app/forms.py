from pyexpat import model
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django import forms


class RegisterUserForm(UserCreationForm):
    class Meta:
        model = User 
        fields = ['username', 'email', 'password1', 'password2']
        widgets = {
            'email': forms.EmailInput(attrs={
                'required': True,
                'placeholder': 'random@example.com',
                'autofocus': True
        }),
         'username': forms.TextInput(attrs={
                'placeholder': 'example'
        })
        }

def __init__(self, *args, **kwargs):
    super(RegisterUserForm, self).__init__(*args, **kwargs)
    self.fields['password1'].widget.attrs = {'placeholder': 'password'}
    self.fields['password2'].widget.attrs = {'placeholder': 'confirm'}


class LoginForm(AuthenticationForm):
    class Meta:
        fields = '__all__'