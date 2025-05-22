document.addEventListener("DOMContentLoaded", function () {

    const btns = document.querySelectorAll(".btnTest");

    btns.forEach(button => {
        button.addEventListener("click", () => {
            const action = button.dataset.action

            switch (action) {
                case "submit movie":
                    console.log("Submitting Movie!")
                    break;

                case "settings":
                    console.log("Settings")
                    break;

                case "top rated":
                    console.log("Top ratings")
                    break;

                case "profile":
                    console.log("Opening profile")
                    break;

                default:
                    console.log("Unknown button pressed")
            }
        });
    });
});

//toggle visibility of modal (movie_form)
function toggleModal() {
    const modal = document.getElementById("modal")

    if (modal) {
        modal.classList.toggle("hidden")
    }

    else {
        console.warn("Modal element not loaded in DOM yet.")
    }
}

//toggle modal when clicking movie box through movieID -> AJAX Call
function openMovieModal(movieId) {
    fetch(`/get-movie-data/${movieId}/`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('id_movie_id').value = movieId;
            document.getElementById('id_title').value = data.title;
            document.getElementById('id_watched').checked = data.watched;
            document.getElementById('id_imdb').value = data.imdb;
            document.getElementById('id_date').value = data.date;
            document.getElementById('id_description').value = data.description;
            document.getElementById('id_genre').value = data.genre;
            document.getElementById('id_duration_min').value = data.duration_min;
            // Show delete button because we click on current movie
            document.getElementById('delete-button').classList.remove('hidden');

            // TODO: Set image preview or handle image logic if needed
            toggleModal();
        })
        .catch(error => {
            console.error("Error fetching movie data:", error);
        });
}


//fade messages out
setTimeout(() => {
    const msg = document.getElementById('flash-message');
    if (!msg) return;

    msg.style.transition = 'opacity 0.5s ease-in-out';
    msg.style.opacity = '0';

    setTimeout(() => {
        msg.remove();
    }, 500);
}, 5000);