// MOBILE MENU

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
}

document.querySelectorAll("#nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    if (nav) {
      nav.classList.remove("open");
    }
  });
});


// FOOTER YEAR

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// CONTACT FORM

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const sendButton = document.getElementById("send-button");

if (contactForm) {

  contactForm.addEventListener("submit", function (event) {

    // VERY IMPORTANT:
    // Stop the browser from leaving/reloading the page.

    event.preventDefault();
    event.stopPropagation();

    if (formStatus) {
      formStatus.textContent = "Sending message...";
      formStatus.style.color = "#2563eb";
      formStatus.style.fontWeight = "700";
      formStatus.style.opacity = "1";
    }

    if (sendButton) {
      sendButton.disabled = true;
      sendButton.textContent = "Sending...";
    }

    const formData = new FormData(contactForm);

    fetch(
      "https://formsubmit.co/ajax/zuwaria43e9@gmail.com",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then(function (response) {

        return response.json();

      })
      .then(function (data) {

        if (formStatus) {

          formStatus.textContent =
            "✓ Message sent successfully! Thank you for contacting me.";

          formStatus.style.color = "#15803d";
          formStatus.style.fontWeight = "700";
          formStatus.style.opacity = "1";
          formStatus.style.display = "block";
        }

        contactForm.reset();

      })
      .catch(function (error) {

        console.error(error);

        if (formStatus) {

          formStatus.textContent =
            "✕ Unable to send message. Please try again.";

          formStatus.style.color = "#dc2626";
          formStatus.style.fontWeight = "700";
          formStatus.style.opacity = "1";
          formStatus.style.display = "block";
        }

      })
      .finally(function () {

        if (sendButton) {

          sendButton.disabled = false;

          sendButton.textContent =
            "Send Message ↗";
        }

      });

  });

}
