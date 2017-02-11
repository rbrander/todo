// app.js

const txtNewTodo = document.getElementById('txtNewTodo');
const divItems = document.getElementById('items');
const todos = [];

const onKeyup = (e) => {
  if (e.which === 13) {
    addTodo(e.target.value);
    e.target.value = '';
    e.target.blur();
  }
};
txtNewTodo.addEventListener('keyup', onKeyup, false);

const addTodo = (text) => {
  todos.push(text);
  const newDiv = document.createElement('div');
  newDiv.textContent = text;
  divItems.appendChild(newDiv);
}

