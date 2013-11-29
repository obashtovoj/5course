
function clickme(){
  var list = document.querySelectorAll("#main p");
  list[0].addEventListener('click', showalert);
}
function showalert(){
  alert('you clicked me!');
}
addEventListener('load', clickme);
 
