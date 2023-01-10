"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const readTodos = () => {
    const todosJSON = localStorage.getItem("todos");
    // Type narrowing
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
};
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
};
const createTodo = (todo) => {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLi.append(todo.text);
    newLi.append(checkbox);
    list.append(newLi);
};
const todos = readTodos();
todos.forEach(createTodo);
form.addEventListener("submit", handleSubmit);
