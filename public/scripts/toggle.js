const loginBox = document.querySelector(".login-container");
const signupBox = document.querySelector(".signup-container");

const loginToggle = document.querySelector(".toggle-login");
const signupToggle = document.querySelector(".toggle-signup");
let toggleState = "login";

loginToggle.addEventListener("click", (e) => {
  e.preventDefault();
  toggleState = "login";
});

signupToggle.addEventListener("click", (e) => {
  e.preventDefault();
  toggleState = "signup";
});
