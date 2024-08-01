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

    if (name.value.trim() == "" || email.value.trim() == "" || subject.value.trim() == "" || message.value.trim() == "") {
        alert('No blank values allowed');
        return false;
    }
    else if (name.value.length < 2) {
        alert('Invalid input in Name field');
        return false;
    }
    else if (subject.value.length < 4) {
        alert('Invalid input in Subject field');
        return false;
    }
    else if (message.value.length < 8) {
        alert('Invalid input in Message field');
        return false;
    }
    else {
        sendMail();
        return true;
    }
}


