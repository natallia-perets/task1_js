function append(form) {
   if (form.input.value) {
      var newItem = document.createElement("LI");
      var newText = document.createElement("DIV")
      newText.innerHTML = form.input.value
      var newButton = document.createElement("BUTTON")
      newButton.class = "delete"
      newButton.innerHTML = 'delete'
      newItem.appendChild(newText);
      newItem.appendChild(newButton);
      document.getElementById("list").appendChild(newItem);
      document.getElementById("list").onclick = function(e) {
    e = e || window.event   
    var target = e.target || e.srcElement 

    if (target.nodeName != 'BUTTON') return

    //target.style.visibility = 'hidden'
	var childr = target.parentNode
	target.parentNode.parentNode.removeChild(childr)
	
	/*for(ind = 0; ind < childr.length; ++ind){
		alert(childr[ind].nodeName)
		target.parentNode.removeChild(childr[ind])
	}*/
    return false // prevent url change
  }
  }
}