// TEMP CHANGE
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("nameInput");
  const button = document.getElementById("greetBtn");
  const message = document.getElementById("message");

  message.textContent = "Page loaded. Enter your name and click the button.";

  button.addEventListener("click", function () {
    const name = input.value;

    if(name === "") {
      message.textContent = "You did not enter your name";
    } else{
      message.textContent = " Hello "+ name + ", Javascript is working";
    }
  });
});