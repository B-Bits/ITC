
const scriptURL = "https://script.google.com/macros/s/AKfycbz_bBUy1hk2OzcmdYmZjBXS1U4jQQwpjGHb1R45hCuf-N1HKmYp4ELYDqH2xc1_9LSmTw/exec";

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    let message = document.getElementById("message").value;

    document.getElementById("displayInfo").innerHTML =
        "Name: " + name + "<br>" +
        "Email: " + email + "<br>" +
        "Gender: " + gender + "<br>" +
        "Message: " + message;

    fetch(scriptURL, {
        method: "POST",
        body: new URLSearchParams({
            name: name,
            email: email,
            gender: gender,
            message: message
        })
    })
    .then(response => response.text())
    .then(result => {
        console.log(result);
        alert("Your information has been saved!");

        form.reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Oops! There was an error sending your data.");
    });
});

