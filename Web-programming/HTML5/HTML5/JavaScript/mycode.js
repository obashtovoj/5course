function clickme(){
  var list = document.querySelectorAll("#main p");
  for(var f = 0; f < list.length; f++){
    list[f].onclick=showalert;
  }
}
function showalert(){
  alert('you clicked me!');
}
window.onload=clickme;
