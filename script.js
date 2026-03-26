console.log("Script loaded"); //this one is added to show that step 1 is completed and file is linked properly.

const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const card = button.closest(".project-card");
        const details = card.querySelector(".project-details");

        details.classList.toggle("hidden");

        if (details.classList.contains("hidden")){
            button.textContent = "Show Details";
        } else {
            button.textContent = "Hide Details";
        }
    });
});

    
