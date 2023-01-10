"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    // Type narrowing
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
}
function createTodo(todo) {
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
    removeBtn.innerHTML = "Remove";
    list.append(newLi);
}
form.addEventListener("submit", handleSubmit);
