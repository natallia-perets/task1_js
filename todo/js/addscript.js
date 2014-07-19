i=0;
function append(form) {
   if (form.input.value) {
      var newItem = document.createElement("LI");
      newItem.id = i
      var newText = document.createElement("DIV")
      newText.innerHTML = form.input.value
      var newButton = document.createElement("BUTTON")
      newButton.class = "delete"
      newButton.innerHTML = 'delete'
      newItem.appendChild(newText);
      newItem.appendChild(newButton);
      document.getElementById("list").appendChild(newItem);
      newButton.onclick = remove(i)
      i=i+1;
   }
}