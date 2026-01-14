// TEMP CHANGE
document.addEventListener("DOMContentLoaded", function () {
  console.log("SCRIPT LOADED");
  const nameInput = document.getElementById("nameInput");
  const ageInput = document.getElementById("ageInput");
  const button = document.getElementById("greetBtn");
  const message = document.getElementById("message");
  const submissions = [];
  window.submissions = submissions;
  const historyList = document.getElementById("history");

  const saved = localStorage.getItem("submissions");
  if (saved) {
    submissions.push(...JSON.parse(saved));
  }

  function saveSubmissions() {
    localStorage.setItem("submissions", JSON.stringify(submissions));
  }

  function validateInput(name, age) {
    if (!name) {
      return { valid: false, message: "Name is required." };
    }

    if (!age || age <= 0) {
      return { valid: false, message: "Please enter valid age." };
    }

    if (age < 18) {
      return { valid: true, message: `Sorry ${name}, you must be 18 or older.` };
    }

    return { valid: true, message: `Welcome ${name}, Access granted.` };
  }

  function renderHistory() {
    historyList.innerHTML = "";
    for (let i = 0; i < submissions.length; i++) {
      const item = document.createElement("li");
      item.textContent = `${submissions[i].name} (${submissions[i].age})`;
      historyList.appendChild(item);
    }
  }

  renderHistory();

  button.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const age = Number(ageInput.value);

    const result = validateInput(name, age);
    message.textContent = result.message;

    if (!result.valid) return;

    submissions.push({ name, age });
    saveSubmissions();
    renderHistory();
  });
});
