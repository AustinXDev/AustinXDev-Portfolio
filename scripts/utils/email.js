
export function sendMail() {
  emailjs.init("pdix6rYPpjKNXPjaG");

  const form = document.getElementById("contact-form");

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const emailInput = document.getElementById('email-input');
    const emailPattern = new RegExp(emailInput.pattern);

    const params = {
      from_name: document.getElementById("name-input").value,
      from_email: emailInput.value,
      subject: document.getElementById("subject-input").value,
      message: document.getElementById("message-input").value
    };

    if (!emailPattern.test(params.from_email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const sendButton = form.querySelector(".send-btn");
    sendButton.disabled = true;
    sendButton.textContent = "Sending...";

    emailjs.send("service_g5puq7y", "template_9cd7ahj", params)
      .then(function(response) {
        alert("✅ Message sent successfully!");
        form.reset();
        sendButton.disabled = false;
        sendButton.textContent = "Send message";
      }, function(error) {
        alert("❌ Failed to send message: " + JSON.stringify(error));
        sendButton.disabled = false;
        sendButton.textContent = "Send message";
      });
  });
}





