//Modal 띄우기
document.getElementById("modal_opne_btn").onclick = function() {
    document.getElementById("modal").style.display="block";
}

document.getElementById("modal_close_btn").onclick = function() {
  document.getElementById("modal").style.display="none";
}

// To-Do 추가하기
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("modal-content__input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("to-do__list").appendChild(li);
  }
  document.getElementById("modal-content__input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u142F");
  span.className = "check";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}