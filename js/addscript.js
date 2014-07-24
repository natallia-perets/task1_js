Todo = function(){
  window.addEventListener("load", init, false);

  var items = new Array()
  var index = 0
  var flag = new Boolean(false)

  function getAllItems(e){

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

function clearAll(e){

  if(flag == true){
    var el = document.getElementById( "allElements" );
    el.parentNode.removeChild( el )
  }

  flag = new Boolean(false)
}

function append(e) {

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
  function init(){
    var showButton = document.getElementById("show");
    showButton.addEventListener("click", getAllItems, false);

    var inputSection = document.getElementById("input");
    inputSection.addEventListener("keydown", clearAll, false);

    var addb = document.getElementById("addbutton");
    addb.addEventListener("click", append, false);
  }

}
();