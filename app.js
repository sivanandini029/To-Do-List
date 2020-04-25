function addTodo(e) {
  // take the input into a text box
  var newTodoText = document.getElementById("todo").value;

  if (newTodoText == "") {
    return false;
  }

  // create a new div for the todo
  var newTodoDiv = document.createElement("div");
  newTodoDiv.innerHTML = newTodoText;
  newTodoDiv.classList.add("todo");

  // create close button
  var closeButton = document.createElement("button");
  closeButton.innerHTML = "X";
  newTodoDiv.appendChild(closeButton);
  closeButton.classList.add("close");

  // delete todo on click
  closeButton.onclick = () => {
    newTodoDiv.parentElement.removeChild(newTodoDiv);
  }

  // change color on click
  newTodoDiv.onclick = () => {
    newTodoDiv.classList.toggle("success");
  }

  // append the new todo to the parent todo container
  var allTodosDiv = document.getElementById("todoList");
  allTodosDiv.appendChild(newTodoDiv);

  // TODO: clear the input after submit
  document.getElementById("todo").value = "";

}