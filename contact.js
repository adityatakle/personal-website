window.onload = function() {
    emailjs.init("BQuw27VPGR2WFgQL3");

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.send("service_fmo6l77", "template_8043v7v", {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value,
            linkedin: document.getElementById("linkedin").value
        }).then(function(response) {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
        }, function(error) {
            alert("Error sending message.");
        });
    });
};
