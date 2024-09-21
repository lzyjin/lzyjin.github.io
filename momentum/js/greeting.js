const greetingForm = document.querySelector("#greeting form");
const greetingInput = document.querySelector("#greeting input");
const greetingTitle = document.querySelector("#greeting h1");

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function handleGreetingSubmit(event) {
  event.preventDefault();
  const typedName = greetingInput.value;
  localStorage.setItem(USERNAME_KEY, typedName);
  paintGreetingTitle(typedName);
}

function paintGreetingTitle(username) {
  greetingTitle.innerText = `Hello, ${username} :)`;
  greetingTitle.classList.remove(HIDDEN_CLASS);
  greetingForm.classList.add(HIDDEN_CLASS);

  clock.classList.remove(HIDDEN_CLASS);
  const toDoContainer = document.querySelector("#todos");
  toDoContainer.classList.remove(HIDDEN_CLASS);
  const quotes = document.querySelector("#quotes");
  quotes.classList.remove(HIDDEN_CLASS);
}

if(savedUsername === null) {
  greetingForm.addEventListener("submit", handleGreetingSubmit);
} else {
  paintGreetingTitle(savedUsername);
}