// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Formspree contact form
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const button = form.querySelector("button");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    // 🔄 Show loading
    button.innerHTML = "Sending...";
    button.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        status.innerHTML = "✅ Message sent successfully!";
        form.reset();
      } else {
        status.innerHTML = "❌ Something went wrong.";
      }
    } catch (error) {
      status.innerHTML = "❌ Error sending message.";
    }

    // 🔁 Reset button
    button.innerHTML = "Send Message";
    button.disabled = false;
  });

});