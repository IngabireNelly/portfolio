<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags and CSS link -->
</head>
<body>
  <!-- HTML content -->

  <!-- JavaScript code -->
  <script>
    // Wait for the DOM content to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
      // Get the contact form element
      const contactForm = document.getElementById('contactForm');

      // Add event listener for form submission
      contactForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Prepare data for submission (optional)
        const data = {};
        formData.forEach((value, key) => {
          data[key] = value;
        });

        // Here, you can perform additional validation if needed

        // Simulate form submission (replace this with your actual form submission logic)
        console.log('Form submitted with data:', data);

        // Reset the form
        contactForm.reset();

        // Show a success message (you can customize this)
        alert('Form submitted successfully!');
      });
    });
  </script>
</body>
</html>
