function clickme(){
  document.querySelector("#main p:first-child").onclick=showalert;
 }
function showalert(){
  alert('you clicked me!');
}
window.onload=clickme;
