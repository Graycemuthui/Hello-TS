interface Todo {
  text: string;
  completed: boolean;
}
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  // Type narrowing
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);

  saveTodos();
  input.value = "";
}

function createTodo(todo: Todo) {
  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  const removeBtn = document.createElement("button");

  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;

  checkbox.addEventListener("change", (e) => {
    todo.completed = !todo.completed;
    saveTodos();
  });

  removeBtn.addEventListener("click", (e) => {
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
    saveTodos();

    newLi.remove();
  });

  newLi.append(checkbox);
  newLi.append(todo.text);
  newLi.append(removeBtn);
  removeBtn.innerHTML = "Delete";
  list.append(newLi);
}

form.addEventListener("submit", handleSubmit);
