function push(){
  if(!mmedia.paused && !mmedia.ended) {
    mmedia.pause();
    play.innerHTML = 'Play';
    window.clearInterval(loop);
  }else{
    mmedia.play();
    play.innerHTML = 'Pause';
    loop = setInterval(status, 1000);
  }
}
