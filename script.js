// TEMP CHANGE
document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("nameInput");
  const ageInput= document.getElementById("ageInput");
  const button = document.getElementById("greetBtn");
  const message = document.getElementById("message");
  const submissions = [];
  window.submissions = submissions;
  const historyList = document.getElementById("history");
  

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


  function renderHistory() {
    historyList.innerHTML = "";

    for(let i=0; i<submissions.length; i++)
    {
      const item = document.createElement("li");
      item.textContent = `${submissions[i].name} (${submissions[i].age})`;
      historyList.appendChild(item);
    }
  }

  button.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const age = Number(ageInput.value);

    const result = getAccessMessage(name,age);
    message.textContent = result;

    if(
      result === "Name is required," ||
      result === "Please enter valid age." ||
      result.includes("Sorry")
    ){
      return;
    }

    submissions.push({
      name: name,
      age: age
    });
    renderHistory();
  });

  
  

});