//your JS code here. If required.
document.getElementById("Form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const ageIp = document.getElementById("age");
  const nameIp = document.getElementById("name");

  if (!ageIp.value || !nameIp.value) {
    alert("Please fill in all fields.");
    return;
  }

  const age = parseInt(ageIp.value);
  const name = nameIp.value;

  const supriya = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  });

  supriya
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });

  ageIp.value = "";
  nameIp.value = "";
});
