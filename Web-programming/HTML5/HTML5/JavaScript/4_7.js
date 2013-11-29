function clickme(){
  var list = document.getElementById("main").querySelectorAll("p");
  list[0].onclick=showalert;
}
function showalert(){
  alert('you clicked me!');
}
window.onload= clickme;
