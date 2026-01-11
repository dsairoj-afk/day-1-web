// TEMP CHANGE
document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("nameInput");
  const ageInput= document.getElementById("ageInput");
  const button = document.getElementById("greetBtn");
  const message = document.getElementById("message");

  button.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const age = Number(ageInput.value);

    if(!name) {
      message.textContent = "Name is required. ";
      return;
    } if(!age || age<=0){
      message.textContent = " Please enter a valid age,";
      return;
    }
    message.textContent =
    age < 18
    ? `Sorry ${name}, you must be 18 or older.`
    : `Welcome ${name}, Acess granted.`;
  });
});