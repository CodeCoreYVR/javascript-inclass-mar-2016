// $("a").css("color", "red");

var links = document.getElementsByTagName("a"); // $("a")

var changeColor = function(event){
  console.log(">>>>>>>>>>>>>>");
  console.log(this);
  console.log(">>>>>>>>>>>>>>");
  event.preventDefault();
  this.style.color = "red";
}

for(var i = 0; i < links.length; i++) {
  var element = links[i];
  element.addEventListener("click", changeColor);
}
