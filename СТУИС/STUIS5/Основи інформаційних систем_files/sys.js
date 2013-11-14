if ("undefined"==typeof(c8BannerLoaderList))
{
     var c8BannerLoaderList = new Array();
};

if ("undefined"==typeof(c8PlaceUList))
{
     var c8PlaceUList = new Array();
};

function c8_setcode(site_id,page_id,format_id,width,height,div_id, ssp_key, ssp_site_id, ssp_site_domain)
{

    //var i=new Image();
    //i.src="http://r.c8.net.ua/rtb_match.php?action=get&ssp_net_id=1&ssp_user_id="+Math.random();
    
	if ('f3264'==site_id)
    {
    	var pix_url = "http://r.c8.net.ua/xmlstat.php?audit1=1&format_id="+format_id+"&ref="+document.referrer+'&rnd='+Math.random();
    	var im = new Image();
    	im.src = pix_url;
    };
	    
    if ("undefined"==typeof(this.c8_sa)) 
    {
		var c8_sa='';
    }
    else
    {
		var c8_sa=this.c8_sa;
    };
    
    if ("undefined"==typeof(width)) width='';
    if ("undefined"==typeof(height)) height='';
    if ("undefined"==typeof(div_id)) div_id='';
    if ("undefined"==typeof(ssp_key)) ssp_key='';

    var c8_pid = Math.round(Math.random() * 1000000000);
    
    c8_sa=c8_sa.replace("'", "");
    c8_sa=c8_sa.replace('"', '');
    
    if ('f49'!=site_id) {
		c8_set_hitua();	
	}
	
    if (''==c8_sa){c8_sa=typeof(hitua)=='undefined'?'':hitua.poll_sex+';'+hitua.poll_age+';';};
    
    if (''==c8_sa)
    {
        var iMa=0;
        if (null!=navigator.userAgent.match(/Android/i))
        {
            iMa=2;
        };
        if (null!=navigator.userAgent.match(/(iOS|iPhone|iPod|iPad|iTouch|Mac|WebKit)/i)) 
        {
            iMa=4+iMa;
        };
        if (null!=navigator.userAgent.match(/(Nokia|Samsung|HTC|LG|Mobile|NEC|Sony|BlackBerry|Palm|Opera mini)/i)) 
        {
            iMa=8+iMa;
        };
        if (null!=navigator.userAgent.match(/(iPhone)/i)) 
        {
            iMa=16+iMa;
        };
        if (null!=navigator.userAgent.match(/(Blackberry)/i)) 
        {
            iMa=32+iMa;
        };
        if (0!=iMa)
        {
            c8_sa='0;0;'+(1+iMa);
        };
    };
    
    var ssp_id;
    if (""!=ssp_key)
    {
    	ssp_id=site_id;
    };
    	
    if (/*10000==site_id &&*/ ""==ssp_key && (9==format_id || (2==format_id /*&& "f2051"==site_id*/) || ( 5==format_id && "f569"==site_id) || ( 4==format_id)))
    {
    	ssp_id=3634;
    	ssp_site_id=site_id;
    	ssp_key='d41de446ec0ef54335f36466c0a2cb72';
    	ssp_site_domain='';
    };
    
    if ((""==ssp_key) && (""==div_id) && (5!=format_id))
        document.write('<scr' + 'ipt language="JavaScript" charset="utf-8" src="http://b.c8.net.ua/show?'+site_id+'&' + c8_pid + '&'+page_id+'&'+format_id+'&'+width+'&'+height+'&'+c8_sa+'&'+div_id+'&'+(document.referrer ? escape(document.referrer) : '')+'"></scr' + 'ipt>');
    else
    {
    	if ((""==ssp_key) && (2==format_id || 3==format_id) && (""!=div_id) && ("undefined"==typeof(c8PlaceUList[div_id])))
        {
        	c8PlaceUList[div_id]='http://b.c8.net.ua/show?'+site_id+'&' + c8_pid + '&'+page_id+'&'+format_id+'&'+width+'&'+height+'&'+c8_sa+'&'+div_id+'&'+(document.referrer ? escape(document.referrer) : '')+'';   
        	
        	var n_site_id=site_id;
        	if ("e"==n_site_id.substr(0,1))
        	{
        		n_site_id="f"+n_site_id.substr(1);
        	};
        		
        	if (2==format_id)
    		{
        		c8_load_script('http://b.c8.net.ua/show?'+n_site_id+'&' + c8_pid + '&1011&11&300&600&'+c8_sa+'&'+div_id+'&'+(document.referrer ? escape(document.referrer) : '')+'');
    		};
    		
    		if (3==format_id)
    		{
        		c8_load_script('http://b.c8.net.ua/show?'+n_site_id+'&' + c8_pid + '&1012&12&240&600&'+c8_sa+'&'+div_id+'&'+(document.referrer ? escape(document.referrer) : '')+'');
    		};
        }
    	else
		{
            if (""==ssp_key) 
            {
                c8_load_script('http://b.c8.net.ua/show?'+site_id+'&' + c8_pid + '&'+page_id+'&'+format_id+'&'+width+'&'+height+'&'+c8_sa+'&'+div_id+'&'+(document.referrer ? escape(document.referrer) : '')+'');
            }
            else
            {
            	c8_load_script('http://r.c8.net.ua/getcode.php?key='+ ssp_key + '&ssp_id='+ssp_id+'&site_id=' + ssp_site_id+'&domain='+escape(ssp_site_domain)+'&rnd=' + c8_pid + '&pid='+page_id+'&format_id='+format_id+'&w='+width+'&h='+height+'&c8_sa='+c8_sa+'&container_id='+div_id+'&ref='+(document.referrer ? escape(document.referrer) : '')+'');
            };
        }
    };
    
    if (("f566"==site_id)||("f1690"==site_id)||("f1689"==site_id)||("f1756"==site_id)||("f1691"==site_id)||("f1910"==site_id)||("f1760"==site_id)||("f1735"==site_id))
    {
    	c8_load_script('http://c8.net.ua/frame.php?s='+site_id+'&'+c8_pid+'&r='+(document.referrer ? escape(document.referrer) : '')+'');
    };
    
    if (0 && 'f49'!=site_id)
    {
    	var b = new SWFObject('http://b.c8.net.ua/s/GATracker.swf', 'c8_track', 1, 1, '8', null);
		
		 b.addVariable('site_id', site_id);
		 b.addVariable('format_id', format_id);
		 b.addVariable('domain', document.domain);
		 b.addParam('allowscriptaccess',"always");
		 c8_track_div=document.getElementById('c8_track_div');
		 if ("undefined"==typeof(c8_track_div) || null==c8_track_div)
		 {
		 	c8_track_div = document.createElement('div');
		 	c8_track_div.setAttribute('id', 'c8_track_div');
			c8_track_div.style.width = 1;
			c8_track_div.style.height = 1;
			c8_track_div.style.top=-1000;
			c8_track_div.style.left=-1000;
			c8_track_div.style.position = "absolute";
			document.body.appendChild(c8_track_div);
		 };
		 b.write('c8_track_div');
    };
    
    //if (""!=div_id) return;
    /*
    if ((''!=c8_sa) && ('f49'!=site_id))
    {
    var m = c8_sa.split(';');
    if (29<m[1])
    {
         show_code1('f49','12','5','0','0','');
    };
    if (1==m[0])
    {
         show_code1('f49','10','5','0','0','');
    };
    if (2==m[0])
    {
         show_code1('f49','9','5','0','0','');
    }; 
    };*/
}

if ("undefined"==typeof(c8_tns_already))
{
    var c8_tns_already = 0;
};

if ("undefined"==typeof(c8_match_user_already))
{
    var c8_match_user_already = c8_readCookie("c8_match");
};

c8_user_match();

function c8_set_code_by_key()
{
	if ("undefined"!=typeof(ad_container_id) && ("undefined"==typeof(c8PlaceUList[ad_container_id])))
		return;
	
	c8_load_script(c8PlaceUList[ad_container_id]);
};

function show_code1(site_id,page_id,format_id,width,height,div_id)
{
	 var c8_pid1 = Math.round(Math.random() * 1000000000);
	  if (undefined===this.c8_sa) 
	    {
			var c8_sa='';
	    }
	    else
	    {
			var c8_sa=this.c8_sa;
	    };
	 
	 c8_load_script('http://b.c8.net.ua/show?'+site_id+'&' + c8_pid1 + '&'+page_id+'&'+format_id+'&'+width+'&'+height+'&'+c8_sa+'&'+div_id+'&'+(document.referrer ? escape(document.referrer) : '')+'');
}

function c8_set_hitua()
{
	//return;
	if (typeof(wbl_behav)=='undefined')
	{
		wbl_behav=1;
	}
	else
	{
		return;	
	};
	
	var p=document.getElementsByTagName('head')[0];
	var s=document.createElement("script");
	s.type="text/javascript";
	s.src="http://c.hit.ua/hit?i=15&g=2&x=3&nc=1&"+Math.round(Math.random()*1000000000);
	s.async = true;
	s.onload=s.onreadystatechange=function(){
	
	if(!("readyState" in s)||/loaded|complete/.test(s.readyState)){
	
		//alert(hitua);
		if ((typeof(hitua)!='undefined'))
	    if (0!=hitua.favor_mask)
	    {
	    var c;var ar=[[6,14],[27,13],[29,15],[30,15],[12,16],[14,17],[19,17],[4,25],[7,22],[8,23],[9,23],[10,23],[25,23],[15,24],[16,24],[21,24],[20,20],[28,21],[35,26]];
	    
	    if(0!=hitua.favor_mask)
	    for(c in ar)
	    {
	    	c=ar[c];
	    	if(hitua.favor_mask&(1<<c[0])&&c[1])
	    	{
	    		show_code1('f49',c[1],'5','0','0','');
	    	};
	    };
	    
	    };
	    
	}};
	p.appendChild(s);
	
	
}

function show_code(site_id,page_id,format_id,width,height,div_id)
{
    if (undefined===c8_sa) var c8_sa='';
    if (undefined===width) width='';
    if (undefined===height) height='';
    if (undefined===div_id) div_id='';
    
    if ('f3264'==site_id)
    {
    	var pix_url = "http://r.c8.net.ua/xmlstat.php?audit=1&format_id="+format_id+"&ref="+document.referrer+'&rnd='+Math.random();
    	var im = new Image();
    	im.src = pix_url;
    };
    
    if (''!=div_id)
    {
	   var ad_container_id=div_id;
    };
    
    var loader_div_id_new = '';
    
    var ssp_key = '';
    var ssp_site_id = '';
    var ssp_site_domain = '';

    var res=page_id.toString().split ('|');
   
    if (res[1])
    {
        page_id=res[0];
        ssp_key=res[1];
        ssp_site_id=res[2];
        ssp_site_domain=res[3];

        if (!ssp_key || !ssp_site_id || !ssp_site_domain)
        {
            return;
        };
    };

    if (('f49'!=site_id) && (5!=format_id)) {
        
        if (""==div_id) 
        {
            loader_div_id_new='c8div_'+site_id+page_id+format_id+'_'+Math.round(Math.random() * 1000000000); 
            document.write("<div style='z-index:99' id='"+loader_div_id_new+"'></div>");
        }
        else
        {
            loader_div_id_new=div_id; 
        };
    };
    
    if (''!=loader_div_id_new)
    {
        var key=site_id+'_'+page_id+'_'+format_id;
        if ("undefined"==typeof(c8BannerLoaderList[key]))
        {
        
    	(function(){
    	
            c8BannerLoaderList[key] = new c8BannerLoader(site_id,page_id,format_id,width,height,loader_div_id_new, ssp_key, ssp_site_id, ssp_site_domain);
            c8BannerLoaderList[key].init();
            })();
        };
    }
    else
    {
        c8_setcode(site_id,page_id,format_id,width,height,loader_div_id_new, ssp_key, ssp_site_id, ssp_site_domain);  
    };
    
    if (site_id && !c8_tns_already)
    {
    	c8_tns_already=1;
    	c8_tns(site_id.substr(1));
    };

    if (site_id && format_id && page_id)
    {
    	 c8_stat(site_id.substr(1), format_id, page_id);
    }
    
}


function c8_load_script(src,txt)
{
try {
if (""==txt) txt="void(0);";
 var head = document.getElementsByTagName('head')[0],
  s = document.createElement('script');
   //s.async = "async";
   s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', src);
     //s.onreadystatechange = function(){if(/loaded|complete/.test(this.readyState)) {eval(txt);head.removeChild(s);}};
      //s.onload = function(){eval(txt);head.removeChild(s);};
       head.insertBefore(s, head.firstChild);
        }catch(e){}
        }

function c8BannerLoader(ban_id,page_id,format_id,height,width,div_id, ssp_key, ssp_site_id, ssp_site_domain) {
    this.ban_id=ban_id;
    this.page_id=page_id;
    this.format_id=format_id;
    this.div_id=div_id;
    this.height=height;
    this.width=width;
    this.name=this.ban_id+'_'+this.page_id+'_'+this.format_id; 
    this.ssp_key=ssp_key;
    this.ssp_site_id=ssp_site_id;
    this.ssp_site_domain=ssp_site_domain;
}
c8BannerLoader.prototype = {

    top: 0,
    ban_id:'',
    div_id:'',
    ssp_key:'',
    ssp_site_id:'',
    ssp_site_domain:'',
    page_id:0,
    format_id:0,
    height:0,
    width:0,
    unload:0,
    name:'',
    
    cm: document.compatMode == "CSS1Compat",
    
    scroll: function (){
        var ch = self.innerHeight || this.cm && document.documentElement.clientHeight || document.body.clientHeight;
        var st = self.pageYOffset || this.cm && document.documentElement.scrollTop || document.body.scrollTop;
        
        if (this.top >= st && st + ch - 15 >= this.top && 0==this.unload) {

              this.show();
        }
    },
    
    show: function () {
    	if (1==this.unload)
    	{
    		return;
    	};
    	
		 this.unload=1;
	     this.removeEvent(window, 'scroll', this.sfunc);
	     c8_setcode(this.ban_id,this.page_id,this.format_id,this.height,this.width,this.div_id, this.ssp_key, this.ssp_site_id, this.ssp_site_domain); 
    	
    },
    
    sfunc: function () {},
    sfunc1: function () {},
    
    reinit: function(){
	if (0==this.unload)
	{
	    var t = this;
	    
	    var old_top = 0;
	    var new_top = 0;
	    
	    if ("f543_7_9"==this.name)
	    {
	    	old_top = t.top;
	    };
	    
	    var obj = document.getElementById(this.div_id);
	    if ('undefined'!=typeof(obj)){
	    	//t.top=0;    
    	    while(obj.offsetParent){new_top += obj.offsetTop; obj = obj.offsetParent}
    	    
    	    if (new_top<old_top)
    	    {
    	    	new_top = old_top;
    	    };
    	    
    	    t.top = new_top;
    	    
    	    t.scroll();
        }
	}; 
    },
    
    init: function(){
        var t = this;
            
        
        eval('this.sfunc = function () {c8BannerLoaderList[\''+this.name+'\'].scroll()};');

	eval('this.sfunc1 = function () {c8BannerLoaderList[\''+this.name+'\'].reinit()};');

	
	

        var obj = document.getElementById(this.div_id);
        if ('undefined'!=typeof(obj) && null!=obj){
    
    
        while(obj.offsetParent){t.top += obj.offsetTop; obj = obj.offsetParent}

        this.addEvent(window, 'scroll',this.sfunc);
        t.scroll();
        setTimeout(this.sfunc1, 1000);
        
        }
    },

     addEvent: function(e,t,f){
            if (e.addEventListener) e.addEventListener(t, f, false);
            else if (e.attachEvent) e.attachEvent('on'+t, f)
         },
    
    removeEvent: function (e,t,f){
            if (e.removeEventListener) e.removeEventListener(t, f, false);
            else if (e.detachEvent) e.detachEvent('on'+t, f)
        }

};

function c8_tns(site_url){
	
	var s = document.createElement("script"),
    p = document.getElementsByTagName("script"),
    l = p.length;
	
	s.async = true;
	s.type = "text/javascript";
	s.src = location.protocol + "//source.mmi.bemobile.ua/cm/cmeter_an.js#tnscm_adn=C8";
	p[l-1].parentNode.insertBefore(s, p[l-1].nextSibling);
	
};


function c8_stat(site_id, format_id, page_id){
    try {

        var d=document.createElement('div');
        
        d.style.position= "absolute";
        d.style.width='1in';
        d.style.height='1in';
        d.style.left='-100%';
        d.style.top='-100%';
        document.body.appendChild(d);
        
        dpi_x = d.offsetWidth;
        dpi_y = d.offsetHeight;

         var i=new Image();
        //var location= escape(window.location);
        //var parent_location= escape(window.parent.location);
        var width = screen.width;
        var height = screen.height;

        i.src="http://stat.c8.net.ua/pixel.php?site_id="+site_id+"&format_id="+format_id+"&page_id="+page_id+"&screen_width="+width+"&screen_height="+height+"&dpi_x="+dpi_x+"&dpi_y="+dpi_y+"&"+Math.random();

    }catch(e){}
}

function c8_user_match()
{
	if (1==c8_match_user_already)
		return;
	
	c8_match_user_already=1;
	c8_load_script('http://r3.c8.net.ua/matchframe.php');
}

function c8_readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
function c8_createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function c8_getid()
{
	return new Array( c8_readCookie('R'), c8_readCookie('I'));
}