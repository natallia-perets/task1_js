function append() {
   if (input.value) {
      var newItem = document.createElement("LI")
      newItem.id = "item"
      var newText = document.createElement("DIV")
      newText.innerHTML = input.value
      var newButton = document.createElement("BUTTON")
      newButton.id = "delete"
      newItem.appendChild(newText);
      newItem.appendChild(newButton);
      document.getElementById("list").appendChild(newItem)
      document.getElementById("list").onclick = function(e) {
    	e = e || window.event   
    	var target = e.target || e.srcElement 
		if (target.nodeName != 'BUTTON') return
		var childr = target.parentNode
		target.parentNode.parentNode.removeChild(childr)
  		}
  	  document.getElementById("input").value = ""
    }
}