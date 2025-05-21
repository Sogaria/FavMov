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