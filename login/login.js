document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let user = localStorage.getItem(username);

  if (user) {
    let parsedUser = JSON.parse(user);
    if (parsedUser.password === password) {
      localStorage.setItem("user", JSON.stringify(parsedUser));
      window.location.href = "../baraa-list/index.html";
    } else {
      alert("incorrect password");
    }
  } else {
    alert("user not found");
  }
});
