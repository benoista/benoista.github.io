(function() {
    emailjs.init({
        publicKey: "w2uzAr8ZPLjpFhryC",
    });
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // these IDs from the previous steps
        emailjs.sendForm('service_8yxowse', 'template_9epmugo', this)
            .then(() => {
                alert('SUCCESS!');
            }, (error) => {
                alert('FAILED...', error);
            });
    });
    };
})();
