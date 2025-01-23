document.addEventListener("DOMContentLoaded", () => {
  // Select the form and feedback division
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // Check if the form exists
  if (!form) {
      console.error("Form not found!");
      return; // Stop execution if the form is not found
  }

  // Check if the feedback div exists
  if (!feedbackDiv) {
      console.error("Feedback div not found!");
      return; // Stop execution if the feedback div is not found
  }

  // Add event listener for form submission
  form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form submission

      // Retrieve and trim user inputs
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      // Call the validation function
      const { isValid, messages } = validateForm(username, email, password);

      // Display feedback
      feedbackDiv.style.display = "block";
      if (isValid) {
          feedbackDiv.textContent = "Registration successful!";
          feedbackDiv.style.color = "#28a745"; // Green color for success
      } else {
          if (messages.length > 0) {
              feedbackDiv.innerHTML = messages.join("<br>");
              feedbackDiv.style.color = "#dc3545"; // Red color for errors
          } else {
              feedbackDiv.textContent = "Unknown error occurred.";
              feedbackDiv.style.color = "#dc3545"; // Red color for errors
          }
      }
  });

  // Function to validate the form
  function validateForm(username, email, password) {
      let isValid = true;
      const messages = [];

      // Username validation
      if (username.length < 3) {
          isValid = false;
          messages.push("Username must be at least 3 characters long.");
      }

      // Email validation
      if (!email.includes("@") || !email.includes(".")) {
          isValid = false;
          messages.push("Email must include '@' and '.' characters.");
      }

      // Password validation
      if (password.length < 8) {
          isValid = false;
          messages.push("Password must be at least 8 characters long.");
      }

      return { isValid, messages };
  }
});

