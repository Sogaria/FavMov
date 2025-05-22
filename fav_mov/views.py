from django.shortcuts import render, redirect, get_object_or_404
from .forms import MovieForm
from .models import Movie
from django.contrib import messages
from django.http import JsonResponse

# Create your views here.
def homepage(request):
    movie_id = None

    if request.method == 'POST':
        movie_id = request.POST.get('movie_id')
        if movie_id:
            movie = get_object_or_404(Movie, id=movie_id)
            form = MovieForm(request.POST, request.FILES, instance=movie)
        else:
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
        'movie_id': movie_id,
    })

def get_movie_data(request, movie_id):
    movie = get_object_or_404(Movie, id=movie_id) #get movie object through its id
    form = MovieForm(instance=movie)
    # Return form field values as json
    return JsonResponse({
        'title': movie.title,
        'watched': movie.watched,
        'imdb': movie.imdb,
        'date': movie.date,
        'description': movie.description,
        'genre': movie.genre,
        'duration_min': movie.duration_min,
        'image': movie.image.url if movie.image else '',
    })
