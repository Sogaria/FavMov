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
