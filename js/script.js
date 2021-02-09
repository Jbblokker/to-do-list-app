let list = $('#list');
let input = $("#input");

function handleNewInput (event) {
event.preventDefault();

  const inputValue = input.val();

  newItem(inputValue);

  newItem.val("");
}

function crossOut(event) {
  $(event.currentTarget).closest("li").toggleClass("strike");
}

function deleteListItem(event) {
  $(event.currentTarget).closest("li").addClass("delete");
}

function newItem(inputValue) {
  if (inputValue === '') {
    alert('You must write something!');
    return;
  }

  let li = $("<li></li>");

  li.text(inputValue);
  list.append(li);

  li.on("dblclick", crossOut);

//adding an X button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

//adding class delete
  crossOutButton.on("click", deleteListItem);

//reordering the list
  list.sortable();
}

$('form[name="toDoList"]').on("submit", handleNewInput);

$('#button').on("click", handleNewInput);
