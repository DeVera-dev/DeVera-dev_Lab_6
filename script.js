script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Get input values
        const firstName = document.getElementById('firstName').value;
        const middleInitial = document.getElementById('middleInitial').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;

        // Validation logic
        if (!firstName || !middleInitial || !lastName || !email || !isValidEmail(email)) {
            alert('Invalid inputs. Please fill in all fields correctly.');
        } else {
            alert('Success!');
            form.reset(); // Clear the form after successful submission
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
});