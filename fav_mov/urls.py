from django.urls import path
from . import views                       

urlpatterns = [
    path('', views.homepage, name="homepage"),
    path('get-movie-data/<int:movie_id>/', views.get_movie_data, name='get_movie_data'),
    path('delete-movie/<int:movie_id>/', views.delete_movie, name='delete-movie'),
]