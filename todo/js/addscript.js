var items = new Array()
var index = 0
var flag = new Boolean(false)
function append() {
   if (input.value) {
      var newItem = document.createElement("LI")
      newItem.id = "item"
      var newText = document.createElement("DIV")
      newText.innerHTML = input.value
      newText.id = index
      var newButton = document.createElement("BUTTON")
      newButton.id = "delete"
      newItem.appendChild(newText);
      newItem.appendChild(newButton);
      document.getElementById("list").appendChild(newItem)
      var arrayText = document.createElement("DIV")
      arrayText.innerHTML = input.value
      items.push(arrayText)
      index = index + 1
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
function getAllItems(){
  if(items.length != 0){ 
    var newDiv = document.createElement("DIV")
    newDiv.id = "allElements"
    for(ind = 0; ind<items.length; ind++){
      newDiv.appendChild(items[ind])
  }
    document.getElementsByTagName("body")[0].appendChild(newDiv)
  }
  flag = new Boolean(true)
}


function clearAll(){
  if(flag == true){
  var el = document.getElementById( "allElements" );
  el.parentNode.removeChild( el )
}
  flag = new Boolean(false)
}