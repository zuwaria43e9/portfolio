// ================================
// MOBILE MENU
// ================================

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}


// Close mobile menu after clicking a link

document.querySelectorAll("#nav a").forEach((link) => {

  link.addEventListener("click", () => {

    if (nav) {
      nav.classList.remove("open");
    }

  });

});


// ================================
// FOOTER YEAR
// ================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {

  contactForm.addEventListener("submit", async (event) => {

    // Stop normal form submission
    // so the visitor does not get a 404 page.

    event.preventDefault();


    // Get the submit button

    const submitButton =
      contactForm.querySelector('button[type="submit"]');


    // Show sending message

    if (formStatus) {
      formStatus.textContent = "Sending message...";
    }


    // Disable button while sending

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }


    // Collect form data

    const formData = new FormData(contactForm);


    try {

      // Send the form to FormSubmit AJAX endpoint

      const response = await fetch(
        "https://formsubmit.co/ajax/zuwaria43e9@gmail.com",
        {
          method: "POST",

          headers: {
            Accept: "application/json"
          },

          body: formData
        }
      );


      // Read FormSubmit response

      const result = await response.json();


      // Successful submission

      if (response.ok) {

        if (formStatus) {
          formStatus.textContent =
            "Message sent successfully! Thank you for contacting me.";
        }


        // Clear the form

        contactForm.reset();

      } else {

        if (formStatus) {
          formStatus.textContent =
            result.message ||
            "Unable to send the message. Please try again.";
        }

      }

    } catch (error) {

      console.error("Contact form error:", error);

      if (formStatus) {
        formStatus.textContent =
          "Something went wrong. Please try again.";
      }

    } finally {

      // Enable button again

      if (submitButton) {

        submitButton.disabled = false;

        submitButton.textContent =
          "Send Message ↗";

      }

    }

  });

}
