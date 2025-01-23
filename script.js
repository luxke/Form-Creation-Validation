document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  if (!form) {
      console.error("Form not found!");
      return; 
  }

  
  if (!feedbackDiv) {
      console.error("Feedback div not found!");
      return; 
  }

  form.addEventListener("submit", (event) => {
      event.preventDefault(); 

      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      const { isValid, messages } = validateForm(username, email, password);

     feedbackDiv.style.display = "block";
      if (isValid) {
          feedbackDiv.textContent = "Registration successful!";
          feedbackDiv.style.color = "#28a745"; 
      } else {
          if (messages.length > 0) {
              feedbackDiv.innerHTML = messages.join("<br>");
              feedbackDiv.style.color = "#dc3545"; 
          } else {
              feedbackDiv.textContent = "Unknown error occurred.";
              feedbackDiv.style.color = "#dc3545"; 
          }
      }
  });

 
  function validateForm(username, email, password) {
      let isValid = true;
      const messages = [];

       if (username.length < 3) {
          isValid = false;
          messages.push("Username must be at least 3 characters long.");
      }

      if (!email.includes("@") || !email.includes(".")) {
          isValid = false;
          messages.push("Email must include '@' and '.' characters.");
      }

     if (password.length < 8) {
          isValid = false;
          messages.push("Password must be at least 8 characters long.");
      }

      return { isValid, messages };
  }
});

