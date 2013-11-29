function status(){
  if(!mmedia.ended){
    var size = parseInt(mmedia.currentTime * maxim / mmedia.duration);
    progress.style.width = size + 'px';
  }else{
    progress.style.width = '0px';
    play.innerHTML = 'Play';
    clearInterval(loop);
  }
}
