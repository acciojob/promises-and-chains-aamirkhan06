//your JS code here. If required.
// script.js

document.getElementById('userForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  const ageInput = document.getElementById('age');
  const nameInput = document.getElementById('name');

  const userAge = ageInput.value;
  const userName = nameInput.value;

  if (isNaN(userAge) || userName.trim() === '') {
    alert('Please fill in both age and name.');
    return;
  }

  // Create a promise that resolves after 4 seconds
  const ageCheckPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userAge >= 18) {
        resolve(userName);
      } else {
        reject(userName);
      }
    }, 4000);
  });

  // Handle promise resolution/rejection
  ageCheckPromise
    .then((name) => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch((name) => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
