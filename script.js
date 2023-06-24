//your JS code here. If required.
document.getElementById("Form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const ageInput = document.getElementById("age");
  const nameInput = document.getElementById("name");

  if (!ageInput.value || !nameInput.value) {
    alert("Please fill in all fields.");
    return;
  }

  const age = parseInt(ageInput.value);
  const name = nameInput.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  });

  promise
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry, ${name}. You aren't old enough.`);
    });

  ageInput.value = "";
  nameInput.value = "";
});
