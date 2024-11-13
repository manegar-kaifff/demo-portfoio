// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Simple alert for form submission
    alert(`Thank you for your message, ${name}!\n\nWe will get back to you at ${email}.`);
  
    // Reset form
    document.getElementById("contact-form").reset();
  });
  