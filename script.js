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

const contactForm= document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
    const successMsg = document.getElementById("success-message");

    nameError.textContent= "";
    emailError.textContent= "";
    messageError.textContent= "";
    successMsg.style.display="none";

    let isValid= true;

        if (nameInput.value.trim() === "") {

            nameError.textContent= "Name is required.";

            isValid= false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (emailInput.value.trim() === "") {

          emailError.textContent = "Email is required.";

          isValid = false;

        } else if (!emailRegex.test(emailInput.value.trim())) {

            emailError.textContent = "Please enter a valid email address.";

            isValid = false;
        }

        if (messageInput.value.trim() === "") {

            messageError.textContent = "Message cannot be empty";
            
            isValid = false;
            }

        if (isValid) {
            successMsg.style.display = "block";
            contactForm.reset();
        }
    });
}


