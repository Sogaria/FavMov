from django.shortcuts import render, redirect
from .forms import MovieForm
from .models import Movie
from django.contrib import messages
# Create your views here.
def homepage(request):
    if request.method == 'POST':
        form = MovieForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()  # saves new movie in DB
            messages.success(request, "Movie successfully added to the database.")
            return redirect('homepage')  # redirect to avoid resubmission on refresh
    else:
        form = MovieForm()

    movies = Movie.objects.all() # fetch all movies from db with each page reload
    
    #return form and movies to template home.html
    return render(request, 'fav_mov/home.html', {
        'form': form,
        'movies': movies,
    })
