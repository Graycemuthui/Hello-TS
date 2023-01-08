const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

// btn.addEventListener("click", function () {
//   alert("CLICKED");
// });

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const newTodoText = input.value;
  const newLi = document.createElement("li");
  newLi.append(newTodoText);
  list.append(newLi);
  input.value = " ";
};

form.addEventListener("submit", handleSubmit);
