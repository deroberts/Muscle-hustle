const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const name = document.getElementById("name-signup").value.trim();
  const email = document.getElementById("email-signup").value.trim();
  const password = document.getElementById("password-signup").value.trim();
  console.log(name, email, password);
  if (name && email && password) {
    if (email.indexOf("@") === -1) {
      alert("Please enter a valid email address");
      return;
    }

    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

if (loginForm) {
  loginForm.addEventListener("submit", loginFormHandler);
}
if (signupForm) {
  signupForm.addEventListener("submit", signupFormHandler);
}
