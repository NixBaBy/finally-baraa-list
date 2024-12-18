document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("password do not match");
    return;
  }
  const user = {
    name: name,
    username: username,
    password: password,
  };
  localStorage.setItem(username, JSON.stringify(user));
  alert("Registration sucessful! Please login.");
  window.location.href = "../login/login.html";
});
