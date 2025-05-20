from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=50)
    watched = models.BooleanField(default=False)
    imdb = models.DecimalField(default=0, decimal_places=1, max_digits=3)
    date = models.IntegerField(default=2000, validators=[
        MinValueValidator(1888),
        MaxValueValidator(2030)
    ])
    description = models.TextField(max_length=200)
    genre = models.CharField(max_length=20)
    duration_min = models.PositiveIntegerField(blank=True, null=True)
    image = models.ImageField(upload_to='movie_images/', blank=True, null=True)

    def __str__(self):
        return self.title