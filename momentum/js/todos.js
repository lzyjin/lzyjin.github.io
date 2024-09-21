const toDoInput = document.querySelector("#todoInput");
const toDoForm = document.querySelector("#todos form");
const toDoList = document.querySelector("#todos ul");

let toDos = [];
const TODOLIST_KEY = "todos";
const savedToDos = JSON.parse(localStorage.getItem(TODOLIST_KEY));

function checkToDo(event) {
  console.dir(event.target.checked);
  const li = event.target.parentElement;
  toDos.forEach(todo =>{
    if(todo.id === parseInt(li.id)) {
      todo.checked = !todo.checked;
    }
  });
  saveToDo();
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
  saveToDo();
}

function saveToDo() {
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(toDos));
}

function paintToDo(toDo) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.id = toDo.id;
  checkbox.type = "checkbox";
  checkbox.className = "input-check";
  checkbox.id = `check-${toDo.id}`;
  if(toDo.checked) {
    checkbox.checked = true;
  }
  span.innerText = toDo.text;
  button.innerText = "❌";

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);

  button.addEventListener("click", deleteToDo);
  checkbox.addEventListener("click", checkToDo);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const toDoText = toDoInput.value;
  const newToDoObj = {
    id: Date.now(),
    text: toDoText,
    checked: false,
  };
  toDoInput.value = "";
  paintToDo(newToDoObj);
  toDos.push(newToDoObj);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

if(savedToDos) {
  savedToDos.forEach(item => {
    toDos.push(item);
    paintToDo(item);
  });
}
