document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav ul');
    const contactForm = document.getElementById('contact-form');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('show');
    });

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        if (nameInput.value.trim() === '' || !isValidEmail(emailInput.value.trim())) {
            alert('Please enter valid name and email.');
        } else {
            alert('Form submitted successfully!');
            // Add logic for sending form data to the server or further actions.
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});