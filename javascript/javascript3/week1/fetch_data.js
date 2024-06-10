// Challenge 1: User Profile Loader
// Objective: Fetch and display user profiles from an API.

// Use the "https://jsonplaceholder.typicode.com/users" API.

// Fetch data of 5 users and display their name, email, and website on the webpage.

// Bonus: Add a "Refresh" button to fetch and display new user data each time it’s clicked.

document.addEventListener("DOMContentLoaded", domLoaded);

let loading = true;

function domLoaded() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((usersData) => {
      return usersData.json();
    })
    .then((data) => data.splice(0, 5))
    .then((data) => updateDom(data))
    .catch((error) => console.log("Something went wrong", error))
    .finally(() => (loading = false));
}

function updateDom(users) {
  const list = document.getElementById("users");

  users.map((user) => {
    let usersList = [user.name, user.email, user.website];
    console.log(usersList);
    const userName = document.createElement("p");

    const userEmail = document.createElement("span");

    userEmail.textContent = usersList[1];
    userName.textContent = usersList[0] + ": ";

    list.appendChild(userName);
    userName.appendChild(userEmail);
  });
}
