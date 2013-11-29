function move(e){
  if(!mmedia.paused && !mmedia.ended){
    var mouseX = e.pageX - bar.offsetLeft;
    var newtime = mouseX * mmedia.duration / maxim;
    mmedia.currentTime = newtime;
    progress.style.width = mouseX + 'px';
  }
}
