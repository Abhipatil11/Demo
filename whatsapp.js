function submitForm() {
    const form = document.getElementById('registrationForm');

    // Collect form data
    const formData = new FormData(form);

    // Construct the message to send via WhatsApp
    let message = "New Car Rental Registration:\n";
    formData.forEach((value, key) => {
        message += `${key}: ${value}\n`;
    });

    // Replace spaces with %20 for WhatsApp API
    const whatsappMessage = encodeURIComponent(message);

    // Replace 'YOUR_PHONE_NUMBER' with your actual phone number
    const whatsappLink = `https://api.whatsapp.com/send?phone=8275829980&text=${whatsappMessage}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappLink, '_blank');

    // Optional: Clear form fields after submission
    form.reset();
}
