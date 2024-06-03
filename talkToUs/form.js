document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Remove text inside the submission box
    form.reset();

    // You can add additional logic here, such as sending an AJAX request or displaying a success message
    console.log("Form submitted successfully!");
  });
});