
document.getElementById("bookingForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = this.querySelector(
        'input[type="text"]'
    ).value;

    document.getElementById("message").innerText =
        "Thank you " + name +
        "! Your booking request has been received.";

    this.reset();
});
