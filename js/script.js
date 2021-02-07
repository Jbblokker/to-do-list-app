function newItem(){

let li = $("<li></li>");
let inputValue = $('#input').val();
list.append(inputValue);

if (inputValue === '') {
  alert('You must write something!');
} else {
  let list = $('#list');
  $('#list').append(li);
}

//this is to cross something off the list
function crossOut() {
  li.toggleClass("strike");
  }

  li.on("dbclick", function crossOut() {
    li.toggleClass("strike");
});

//adding an X button
let crossOutButton = $( '<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

//adding class delete
crossOutButton.on("click", deleteListItem);
  function deleteListItem(){
    li.addClass("delete")
}

//reordering the list
$('list').sortable();
}
