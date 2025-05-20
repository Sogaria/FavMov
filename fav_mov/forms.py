from django import forms
from .models import Movie

class MovieForm(forms.ModelForm):
    class Meta:
        model = Movie
        fields = ['title', 'watched', 'imdb', 'date', 'description', 'genre', 'duration_min', 'image']