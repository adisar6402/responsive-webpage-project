// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector("nav ul");

    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

// Form Validation
const forms = document.querySelectorAll("form");
forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const feedback = form.querySelector("textarea").value.trim();

        // Check if any required fields are empty
        if (!name || !email || !feedback) {
            event.preventDefault();
            alert("All fields are required!");
        }
    });
});
