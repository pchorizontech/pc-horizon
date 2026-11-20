
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            const isOpen = navMenu.classList.toggle("active");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        navMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    const year = document.getElementById("currentYear");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const service = document.getElementById("service").value;
            const message = document.getElementById("message").value.trim();

            const subject = "PC HORIZON Inquiry - " + service;

            const body =
                "Hello PC HORIZON,\n\n" +
                "I would like to inquire about your services.\n\n" +
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Service: " + service + "\n\n" +
                "Project Details:\n" + message;

            const mailto =
                "mailto:pchorizon.tech@gmail.com" +
                "?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent(body);

            window.open(mailto, "_self");
        });
    }

});
