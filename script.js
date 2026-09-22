const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        formStatus.textContent = "Sending message...";

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/zuwaria43e9@gmail.com",
                {
                    method: "POST",
                    headers: {
                        "Accept": "application/json"
                    },
                    body: formData
                }
            );

            if (response.ok) {
                formStatus.textContent =
                    "Message sent successfully!";
                contactForm.reset();
            } else {
                formStatus.textContent =
                    "Unable to send the message. Please try again.";
            }
        } catch (error) {
            formStatus.textContent =
                "Something went wrong. Please try again.";
        }
    });
}
