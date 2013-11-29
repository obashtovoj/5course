var maxim, mmedia, play, bar, progress, loop;
function initiate(){
  maxim = 400;
  mmedia = document.getElementById('media');
  play = document.getElementById('play');
  bar = document.getElementById('bar');
  progress = document.getElementById('progress');
 
 
  play.addEventListener('click', push, false);
  bar.addEventListener('click', move, false);
  
}
