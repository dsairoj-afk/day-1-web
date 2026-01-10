document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("greetBtn");
  const input = document.getElementById("nameInput");
  const message = document.getElementById("message");

  button.addEventListener("click", function () {
    const name = input.value;

    if (name === "") {
      message.textContent = "Please enter your name.";
    } else {
      message.textContent = "Hello, " + name + "! Welcome to my website.";
    }
  });
});


