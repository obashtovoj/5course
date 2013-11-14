 /********************************************************************
 *   author:   gondo                       				*
 *   email:    gondo@webdesigners.sk       				*
 ********************************************************************/


dw_scrollObjs = {};


function isIE7() {
    return navigator.userAgent.indexOf('MSIE 7.0') != -1;
}

function dw_scrollObj(wnId,lyrId,cntId,area){
    this.id=wnId;
    dw_scrollObjs[this.id]=this;
    this.animString="dw_scrollObjs."+this.id;
    if(!this.write_scroll_bar(wnId,area,cntId)) return;
    this.load(lyrId,cntId);
    this.setUpScrollbar("drag_top", "track_top", "h", 0, 0);
    this.setUpScrollbar("drag_bottom", "track_bottom", "h", 0, 0);
};

dw_scrollObj.prototype.write_scroll_bar = function(content,where,text){
    where_obj   = document.getElementById(where);
    text_obj    = document.getElementById(text);
    content_obj = document.getElementById(content);
    if(text_obj.offsetWidth <= where_obj.offsetWidth){
        return false;
    }
    content_obj.style.overflow="hidden";
    document.getElementById('scrollbar_bottom').style.marginTop="0px";
    if (isIE7()) {
  
      document.getElementById('scrollbar_bottom').style.bottom="7px";
    }
    
    document.getElementById('left_top').innerHTML += '<a href="javascript:;" title="left" onfocus="blur();" onclick="return false" onmouseover="dw_scrollObj.initScroll(\'content\',\'left\')" onmouseout="dw_scrollObj.stopScroll(\'content\')" onmousedown="dw_scrollObj.doubleSpeed(\'content\')" onmouseup="dw_scrollObj.resetSpeed(\'content\')"></a>';
    document.getElementById('left_bottom').innerHTML += '<a href="javascript:;" title="left" onfocus="blur();" id="s5_scrollleft" onclick="dw_scrollObj.initScroll(\'content\',\'left\')" onmouseover="dw_scrollObj.initScroll(\'content\',\'left\')" onmouseout="dw_scrollObj.stopScroll(\'content\')" onmousedown="dw_scrollObj.doubleSpeed(\'content\')" onmouseup="dw_scrollObj.resetSpeed(\'content\')"></a>';
    document.getElementById('right_top').innerHTML += '<a href="javascript:;" title="right" onfocus="blur();" onclick="return false" onmouseover="dw_scrollObj.initScroll(\'content\',\'right\')" onmouseout="dw_scrollObj.stopScroll(\'content\')" onmousedown="dw_scrollObj.doubleSpeed(\'content\')" onmouseup="dw_scrollObj.resetSpeed(\'content\')"></a>';
    document.getElementById('right_bottom').innerHTML += '<a href="javascript:;" title="right" id="s5_scrollright" onfocus="blur();" onclick="dw_scrollObj.initScroll(\'content\',\'right\')" onmouseover="dw_scrollObj.initScroll(\'content\',\'right\')" onmouseout="dw_scrollObj.stopScroll(\'content\')" onmousedown="dw_scrollObj.doubleSpeed(\'content\')" onmouseup="dw_scrollObj.resetSpeed(\'content\')"></a>';
    document.getElementById('track_top').innerHTML += '<div id="drag_top"></div>';
    document.getElementById('track_bottom').innerHTML += '<div id="drag_bottom"></div>';
    return true;
}

dw_scrollObj.loadLayer = function(wnId,id,cntId) {
    if(dw_scrollObjs[wnId])
        dw_scrollObjs[wnId].load(id,cntId);
};

dw_scrollObj.prototype.load = function(lyrId,cntId) {
    if(!document.getElementById)
        return;
    var wndo,lyr;
    if(this.lyrId) {
        lyr=document.getElementById(this.lyrId);
        lyr.style.visibility="hidden";
    }
    lyr=document.getElementById(lyrId);
    wndo=document.getElementById(this.id);
    lyr.style.top=this.y=0;
    lyr.style.left=this.x=0;
    this.maxY=(lyr.offsetHeight-wndo.offsetHeight>0) ? lyr.offsetHeight-wndo.offsetHeight : 0;
    this.wd=cntId ? document.getElementById(cntId).offsetWidth : lyr.offsetWidth;
    this.maxX=(this.wd-wndo.offsetWidth>0) ? this.wd-wndo.offsetWidth : 0;
    this.lyrId=lyrId;
    lyr.style.visibility="visible";
    this.on_load();
    this.ready=true;
};

dw_scrollObj.prototype.on_load=function() {};
dw_scrollObj.prototype.shiftTo=function(lyr,x,y) {
    if(!lyr.style)
        return;
    lyr.style.left=(this.x=x)+"px";
    lyr.style.top=(this.y=y)+"px";
};

dw_scrollObj.GeckoTableBugFix=function() {
    var ua=navigator.userAgent;
    if(ua.indexOf("Gecko")>-1&&ua.indexOf("Firefox")==-1&&ua.indexOf("Safari")==-1&&ua.indexOf("Konqueror")==-1) {
        dw_scrollObj.hold=[];
        for(var i=0;arguments[i];i++) {
            if(dw_scrollObjs[arguments[i]]) {
                var wndo=document.getElementById(arguments[i]);
                var holderId=wndo.parentNode.id;
                var holder=document.getElementById(holderId);
                document.body.appendChild(holder.removeChild(wndo));
                wndo.style.zIndex=1000;
                var pos=getPageOffsets(holder);
                wndo.style.left=pos.x+"px";
                wndo.style.top=pos.y+"px";
                dw_scrollObj.hold[i]=[arguments[i],holderId];
            }
        }
        window.addEventListener("resize",dw_scrollObj.rePositionGecko,true);
    }
};

dw_scrollObj.rePositionGecko=function() {
    if(dw_scrollObj.hold) {
        for(var i=0;dw_scrollObj.hold[i];i++) {
            var wndo=document.getElementById(dw_scrollObj.hold[i][0]);
            var holder=document.getElementById(dw_scrollObj.hold[i][1]);
            var pos=getPageOffsets(holder);
            wndo.style.left=pos.x+"px";
            wndo.style.top=pos.y+"px";
        }
    }
};

function getPageOffsets(el) {
    var left=el.offsetLeft;
    var top=el.offsetTop;
    if(el.offsetParent&&el.offsetParent.clientLeft||el.offsetParent.clientTop) {
        left+=el.offsetParent.clientLeft;
        top+=el.offsetParent.clientTop;
    }
    while(el=el.offsetParent) {
        left+=el.offsetLeft;
        top+=el.offsetTop;
    }
    return{x:left,y:top};
};

dw_scrollObj.stopScroll = function(wnId) {
  if ( dw_scrollObjs[wnId] ) dw_scrollObjs[wnId].endScroll();
}

dw_scrollObj.doubleSpeed = function(wnId) {
  if ( dw_scrollObjs[wnId] ) dw_scrollObjs[wnId].speed *= 2;
}

dw_scrollObj.resetSpeed = function(wnId) {
  if ( dw_scrollObjs[wnId] ) dw_scrollObjs[wnId].speed /= 2;
}

dw_scrollObj.initScroll = function(wnId, deg, sp) {
  if ( dw_scrollObjs[wnId] ) {
    var cosine, sine;
    if (typeof deg == "string") {
      switch (deg) {
        case "up"    : deg = 90;  break;
        case "down"  : deg = 270; break;
        case "left"  : deg = 180; break;
        case "right" : deg = 0;   break;
        default: 
       }
    } 
    deg = deg % 360;
    if (deg % 90 == 0) {
      cosine = (deg == 0)? -1: (deg == 180)? 1: 0;
      sine = (deg == 90)? 1: (deg == 270)? -1: 0;
    } else {
      var angle = deg * Math.PI/180;
      cosine = -Math.cos(angle); sine = Math.sin(angle);
    }
    dw_scrollObjs[wnId].fx = cosine / ( Math.abs(cosine) + Math.abs(sine) );
    dw_scrollObjs[wnId].fy = sine / ( Math.abs(cosine) + Math.abs(sine) );
    dw_scrollObjs[wnId].endX = (deg == 90 || deg == 270)? dw_scrollObjs[wnId].x:
      (deg < 90 || deg > 270)? -dw_scrollObjs[wnId].maxX: 0; 
    dw_scrollObjs[wnId].endY = (deg == 0 || deg == 180)? dw_scrollObjs[wnId].y: 
      (deg < 180)? 0: -dw_scrollObjs[wnId].maxY;
    dw_scrollObjs[wnId].startScroll(sp);
  }
}

dw_scrollObj.prototype.startScroll = function(speed) {
  if (!this.ready)
    return;
  if (this.timerId)
    clearInterval(this.timerId);
  this.speed = speed || dw_scrollObj.speed;
  this.lyr = document.getElementById(this.lyrId);
  this.lastTime = ( new Date() ).getTime();
  this.on_scroll_start();
  this.timerId = setInterval(this.animString + ".scroll()", 10); 
}

dw_scrollObj.prototype.scroll = function() {
  var now = ( new Date() ).getTime();
  var d = (now - this.lastTime)/1000 * this.speed;
  if (d > 0) {
    var x = this.x + this.fx * d; var y = this.y + this.fy * d;
    if (this.fx == 0 || this.fy == 0) { 
      if ( ( this.fx == -1 && x > -this.maxX ) || ( this.fx == 1 && x < 0 ) || 
        ( this.fy == -1 && y > -this.maxY ) || ( this.fy == 1 && y < 0 ) ) {
        this.lastTime = now;
        this.shiftTo(this.lyr, x, y);
        this.on_scroll(x, y);
      } else {
        clearInterval(this.timerId); this.timerId = 0;
        this.shiftTo(this.lyr, this.endX, this.endY);
        this.on_scroll_end(this.endX, this.endY);
      }
    } else { 
      if ( ( this.fx < 0 && x >= -this.maxX && this.fy < 0 && y >= -this.maxY ) ||
        ( this.fx > 0 && x <= 0 && this.fy > 0 && y <= 0 ) ||
        ( this.fx < 0 && x >= -this.maxX && this.fy > 0 && y <= 0 ) ||
        ( this.fx > 0 && x <= 0 && this.fy < 0 && y >= -this.maxY ) ) {
        this.lastTime = now;
        this.shiftTo(this.lyr, x, y);
        this.on_scroll(x, y);
      } else {
        clearInterval(this.timerId); this.timerId = 0;
        this.on_scroll_end(this.x, this.y);
      }
    }
  }
}

dw_scrollObj.prototype.endScroll = function() {
  if (!this.ready) return;
  if (this.timerId) clearInterval(this.timerId);
  this.timerId = 0;  this.lyr = null;
}

dw_scrollObj.prototype.on_scroll = function() {}
dw_scrollObj.prototype.on_scroll_start = function() {}
dw_scrollObj.prototype.on_scroll_end = function() {}
  
var dw_slidebar = {
  obj: null,
  slideDur: 500,  
  init: function (bar, track, axis, x, y) {
    x = x || 0; y = y || 0;
    bar.style.left = x + "px"; bar.style.top = y + "px";
    bar.axis = axis; track.bar = bar;
    if (axis == "h") {
      bar.trkWd = track.offsetWidth; 
      bar.maxX = bar.trkWd - bar.offsetWidth - x; 
      bar.minX = x;
      bar.maxY = y;
      bar.minY = y;
    } else {
      bar.trkHt = track.offsetHeight;
      bar.maxY = bar.trkHt - bar.offsetHeight - y; 
      bar.maxX = x;
      bar.minX = x;
      bar.minY = y;
    }
    bar.on_drag_start =  bar.on_drag =   bar.on_drag_end = 
    bar.on_slide_start = bar.on_slide =  bar.on_slide_end = function() {}
    bar.onmousedown = this.startDrag;
    track.onmousedown = this.startSlide;
  },
  
  startSlide: function(e) { 
    if ( dw_slidebar.aniTimer ) clearInterval(dw_slidebar.aniTimer);
    e = e? e: window.event;
    var bar = dw_slidebar.obj = this.bar; 
    e.offX = (typeof e.layerX != "undefined")? e.layerX: e.offsetX;
    e.offY = (typeof e.layerY != "undefined")? e.layerY: e.offsetY;
    bar.startX = parseInt(bar.style.left);
    bar.startY = parseInt(bar.style.top);
    if (bar.axis == "v") {
      bar.destX = bar.startX;
      bar.destY = (e.offY < bar.startY)? e.offY: e.offY - bar.offsetHeight;
      bar.destY = Math.min( Math.max(bar.destY, bar.minY), bar.maxY );
    } else {
      bar.destX = (e.offX < bar.startX)? e.offX: e.offX - bar.offsetWidth;
      bar.destX = Math.min( Math.max(bar.destX, bar.minX), bar.maxX );
      bar.destY = bar.startY;
    }
    bar.distX = bar.destX - bar.startX; bar.distY = bar.destY - bar.startY;
    dw_slidebar.per = Math.PI/(2 * dw_slidebar.slideDur);
    dw_slidebar.slideStart = (new Date()).getTime();
    bar.on_slide_start(bar.startX, bar.startY);
    dw_slidebar.aniTimer = setInterval("dw_slidebar.doSlide()",10);
  },
  
  doSlide: function() {
    if ( !dw_slidebar.obj ) { clearInterval(dw_slidebar.aniTimer); return; }    
    var bar = dw_slidebar.obj;
    var bar_top = document.getElementById('drag_top');
    var bar_bottom = document.getElementById('drag_bottom');
    var elapsed = (new Date()).getTime() - this.slideStart;
    if (elapsed < this.slideDur) {
        var x = bar.startX + bar.distX * Math.sin(this.per*elapsed);
        var y = bar.startY + bar.distY * Math.sin(this.per*elapsed);
        bar_top.style.left = x + "px";
        bar_top.style.top = y + "px";
        bar_bottom.style.left = x + "px";
        bar_bottom.style.top = y + "px";
        bar.on_slide(x, y);
    } else {    
        clearInterval(this.aniTimer);
        bar_top.style.left = bar.destX + "px";
        bar_top.style.top = bar.destY + "px";
        bar_bottom.style.left = bar.destX + "px";
        bar_top.style.top = bar.destY + "px";
        bar.on_slide_end(bar.destX, bar.destY);
        this.obj = null;
    }
  },
  
  startDrag: function (e) { 
    e = dw_event.DOMit(e);
    if ( dw_slidebar.aniTimer ) clearInterval(dw_slidebar.aniTimer);
    var bar = dw_slidebar.obj = this;
    bar.downX = e.clientX; bar.downY = e.clientY;
    bar.startX = parseInt(bar.style.left);
    bar.startY = parseInt(bar.style.top);
    bar.on_drag_start(bar.startX, bar.startY);
    dw_event.add( document, "mousemove", dw_slidebar.doDrag, true );
    dw_event.add( document, "mouseup",   dw_slidebar.endDrag,  true );
    e.stopPropagation();
  },

  doDrag: function (e) {
    e = e? e: window.event;
    if (!dw_slidebar.obj) return;
    var bar = dw_slidebar.obj;
    var bar_top = document.getElementById('drag_top');
    var bar_bottom = document.getElementById('drag_bottom');
    var nx = bar.startX + e.clientX - bar.downX;
    var ny = bar.startY + e.clientY - bar.downY;
    nx = Math.min( Math.max( bar.minX, nx ), bar.maxX);
    ny = Math.min( Math.max( bar.minY, ny ), bar.maxY);
    //bar.style.left = nx + "px";
    //bar.style.top  = ny + "px";
    bar_top.style.left = nx + "px";
    bar_top.style.top  = ny + "px";
    bar_bottom.style.left = nx + "px";
    bar_bottom.style.top  = ny + "px";
    bar.on_drag(nx,ny);
    return false;  
  },
  
  endDrag: function () {
    dw_event.remove( document, "mousemove", dw_slidebar.doDrag, true );
    dw_event.remove( document, "mouseup",   dw_slidebar.endDrag,  true );
    if ( !dw_slidebar.obj ) return; 
    dw_slidebar.obj.on_drag_end( parseInt(dw_slidebar.obj.style.left), parseInt(dw_slidebar.obj.style.top) );
    dw_slidebar.obj = null;  
  }
  
}

dw_scrollObj.prototype.bSizeDragBar = true;

dw_scrollObj.prototype.setUpScrollbar = function(id, trkId, axis, offx, offy) {
  if (!document.getElementById) return;
  var bar = document.getElementById(id);
  var trk = document.getElementById(trkId);
  dw_slidebar.init(bar, trk, axis, offx, offy);
  bar.wn = dw_scrollObjs[this.id]; 
  if (axis == "v")
    this.vBarId = id;
  else
    this.hBarId = id;
  if (this.bSizeDragBar)
    this.setBarSize();
  bar.on_drag_start = bar.on_slide_start = dw_scrollObj.getWndoLyrRef;
  bar.on_drag_end =   bar.on_slide_end =   dw_scrollObj.tossWndoLyrRef;
  bar.on_drag =       bar.on_slide =       dw_scrollObj.UpdateWndoLyrPos;
}

dw_scrollObj.getWndoLyrRef = function()  { this.wnLyr = document.getElementById(this.wn.lyrId); }
dw_scrollObj.tossWndoLyrRef = function() { this.wnLyr = null; }
dw_scrollObj.UpdateWndoLyrPos = function(x, y) {
  var nx, ny;
  if (this.axis == "v") {
    nx = this.wn.x; 
    ny = -(y - this.minY) * ( this.wn.maxY / (this.maxY - this.minY) ) || 0;
  } else {
    ny = this.wn.y;
    nx = -(x - this.minX) * ( this.wn.maxX / (this.maxX - this.minX) ) || 0;
  }
  this.wn.shiftTo(this.wnLyr, nx, ny);
}

dw_scrollObj.prototype.updateScrollbar = function(x, y) {
  var nx, ny;
  if ( this.vBarId ) {
    if (!this.maxY) return;
    ny = -( y * ( (this.vbar.maxY - this.vbar.minY) / this.maxY ) - this.vbar.minY );
    ny = Math.min( Math.max(ny, this.vbar.minY), this.vbar.maxY);  
    nx = parseInt(this.vbar.style.left);
    this.vbar.style.left = nx + "px";
    this.vbar.style.top = ny + "px";
  } if ( this.hBarId ) {
    if (!this.maxX) return;
    nx = -( x * ( (this.hbar.maxX - this.hbar.minX) / this.maxX ) - this.hbar.minX );
    nx = Math.min( Math.max(nx, this.hbar.minX), this.hbar.maxX);
    ny = parseInt(this.hbar.style.top);
    var bar_top = document.getElementById('drag_top');
    var bar_bottom = document.getElementById('drag_bottom');
    bar_top.style.left = nx + "px";
    bar_top.style.top = ny + "px";
    bar_bottom.style.left = nx + "px";
    bar_bottom.style.top = ny + "px";
  } 
}

dw_scrollObj.prototype.restoreScrollbars = function() {
  var bar;
  if (this.vBarId) {
    bar = document.getElementById(this.vBarId);
    bar.style.left = bar.minX + "px"; bar.style.top = bar.minY + "px";
  }
  if (this.hBarId) {
    bar = document.getElementById(this.hBarId);
    bar.style.left = bar.minX + "px"; bar.style.top = bar.minY + "px";
  }
}
  
dw_scrollObj.prototype.setBarSize = function() {
  var bar;
  var lyr = document.getElementById(this.lyrId);
  var wn = document.getElementById(this.id);
  if (this.vBarId) {
    bar = document.getElementById(this.vBarId);
    bar.style.height = (lyr.offsetHeight > wn.offsetHeight)? bar.trkHt / ( lyr.offsetHeight / wn.offsetHeight ) + "px": bar.trkHt - 2*bar.minY + "px";
    bar.maxY = bar.trkHt - bar.offsetHeight - bar.minY; 
  }
  if (this.hBarId) {
    bar = document.getElementById(this.hBarId);
    //vypnutie nastavovanie velkosti scrollbaru
    //bar.style.width = (this.wd > wn.offsetWidth)? bar.trkWd / ( this.wd / wn.offsetWidth ) + "px": bar.trkWd - 2*bar.minX + "px";
    bar.maxX = bar.trkWd - bar.offsetWidth - bar.minX; 
  }
}

dw_scrollObj.prototype.on_load = function() { 
  this.restoreScrollbars();
  if (this.bSizeDragBar) this.setBarSize();
}

dw_scrollObj.prototype.on_scroll = dw_scrollObj.prototype.on_slide = function(x,y) { this.updateScrollbar(x,y); }

dw_scrollObj.prototype.on_scroll_start = dw_scrollObj.prototype.on_slide_start = function() {
  if ( this.vBarId ) this.vbar = document.getElementById(this.vBarId);
  if ( this.hBarId ) this.hbar = document.getElementById(this.hBarId);
}

dw_scrollObj.prototype.on_scroll_end = dw_scrollObj.prototype.on_slide_end = function(x, y) { 
  this.updateScrollbar(x,y);
  this.lyr = null;
  this.bar = null; 
}

var dw_event = {
  add: function(obj, etype, fp, cap) {
    cap = cap || false;
    if (obj.addEventListener)
        obj.addEventListener(etype, fp, cap);
    else if (obj.attachEvent)
        obj.attachEvent("on" + etype, fp);
  }, 

  remove: function(obj, etype, fp, cap) {
    cap = cap || false;
    if (obj.removeEventListener)
        obj.removeEventListener(etype, fp, cap);
    else if (obj.detachEvent)
        obj.detachEvent("on" + etype, fp);
  }, 

  DOMit: function(e) { 
    e = e? e: window.event;
    e.tgt = e.srcElement? e.srcElement: e.target;
    if (!e.preventDefault)
        e.preventDefault = function () {
            return false;
        }
    if (!e.stopPropagation) e.stopPropagation = function () {
        if (window.event)
            window.event.cancelBubble = true;
    }
    return e;
  }
}


function fireOnclick(objID) {
var target=document.getElementById(objID);
if(document.dispatchEvent) { // W3C
	var oEvent = document.createEvent( "MouseEvents" );
	oEvent.initMouseEvent("click", true, true,window, 1, 1, 1, 1, 1, false, false, false, false, 0, target);
	target.dispatchEvent( oEvent );
	}
else if(document.fireEvent) { // IE
	target.fireEvent("onclick");
	}    
}


var s5iscrolling = 0;
function s5_scrollingcheck() {
	if (s5iscrolling == 0) {
		s5_scrollright();
		window.setTimeout('s5_scrollingcheck()', 5); 
	} else {return false;}}

function s5_scrollright() {
	fireOnclick('s5_scrollright');
	s5iscrolling = 1;
	s5_imagescrollkcr();}
	
function s5_imagescrollkcr(){
	if (document.getElementById("drag_bottom").offsetLeft >= s5scrollwidth) {	
		s5_scrollleft();
		return false;	}
	window.setTimeout('s5_imagescrollkcr()',5);	}
	
function s5_scrollleft() {
	fireOnclick('s5_scrollleft');
	s5_imagescrollkcl();}

function s5_imagescrollkcl(){
	if (document.getElementById("drag_bottom").offsetLeft <= 0) {
		s5_scrollright()
		return false;	}
	window.setTimeout('s5_imagescrollkcl()',5);	}




function s5_imagescrollstop() {
	dw_scrollObj.stopScroll('content');
		return false;
}

function s5_imagescrollgo() {
	s5_scrollright();}