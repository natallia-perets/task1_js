function remove(e) {
	var event = e || window.event;
    var target = event.target || event.srcElement;

  if (target.nodeName != 'button') return;
  var href = target.getAttribute('class');
  alert(href); // в данном примере просто выводим
  return false;

	/*var ItemToRemove = document.getElementById(this.id)
    document.getElementById("list").removeChild(ItemToRemove);*/
}
