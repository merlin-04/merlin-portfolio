function sendMail() {
    let parms = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    }
    emailjs.send('service_j15desk', 'template_aaehtgi', parms).then(alert("Your message has been sent. Thank you!"));
    location.reload();
}
function validate() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    if (name.value == "" || email.value == "" || subject.value == "" || message.value == "") {
        alert('No blank values allowed');
        return false;
    }
    else {
        sendMail();
        return true;
    }
}


