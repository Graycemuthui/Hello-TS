interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

const readTodos = (): Todo[] => {
  const todosJSON = localStorage.getItem("todos");
  // Type narrowing
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
};

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todos));
  input.value = "";
};

const createTodo = (todo: Todo) => {
  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newLi.append(todo.text);
  newLi.append(checkbox);
  list.append(newLi);
};

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

form.addEventListener("submit", handleSubmit);
