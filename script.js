// TEMP CHANGE
document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("nameInput");
  const ageInput= document.getElementById("ageInput");
  const button = document.getElementById("greetBtn");
  const message = document.getElementById("message");

  function getAccessMessage(name,age) {
    if(!name)
    {
      return "Name is required.";
    }
    if(!age || age<=0)
    {
      return "Please enter valid age.";
    }
    if(age<18)
    {
      return `Sorry ${name}, you must be 18 or older.`;
    }
    return `Welcome ${name}, Access granted.`;
  }

  button.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const age = Number(ageInput.value);

    const result = getAccessMessage(name,age);
    message.textContent = result;
  });

});