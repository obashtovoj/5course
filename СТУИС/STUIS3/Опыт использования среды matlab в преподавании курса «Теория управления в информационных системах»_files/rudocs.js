/*marketgid.comV3.0*/ if(!this.MarketGidJSON){ MarketGidJSON=function(){function f(n){return n<10?'0'+n:n;} Date.prototype.toJSON=function(){return this.getUTCFullYear()+'-'+ f(this.getUTCMonth()+1)+'-'+ f(this.getUTCDate())+'T'+ f(this.getUTCHours())+':'+ f(this.getUTCMinutes())+':'+ f(this.getUTCSeconds())+'Z';};var m={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};function stringify(value,whitelist){var a,i,k,l,r=/["\\\x00-\x1f\x7f-\x9f]/g,v;switch(typeof value){case'string':return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];if(c){return c;} c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+ (c%16).toString(16);})+'"':'"'+value+'"';case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';} if(typeof value.toJSON==='function'){return stringify(value.toJSON());} a=[];if(typeof value.length==='number'&&!(value.propertyIsEnumerable('length'))){l=value.length;for(i=0;i<l;i+=1){a.push(stringify(value[i],whitelist)||'null');} return'['+a.join(',')+']';} if(whitelist){l=whitelist.length;for(i=0;i<l;i+=1){k=whitelist[i];if(typeof k==='string'){v=stringify(value[k],whitelist);if(v){a.push(stringify(k)+':'+v);}}}}else{for(k in value){if(typeof k==='string'){v=stringify(value[k],whitelist);if(v){a.push(stringify(k)+':'+v);}}}} return'{'+a.join(',')+'}';}} return{stringify:stringify,parse:function(text,filter){var j;function walk(k,v){var i,n;if(v&&typeof v==='object'){for(i in v){if(Object.prototype.hasOwnProperty.apply(v,[i])){n=walk(i,v[i]);if(n!==undefined){v[i]=n;}}}} return filter(k,v);} if(/^[\],:{}\s]*$/.test(text.replace(/\\./g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof filter==='function'?walk('',j):j;} throw new SyntaxError('parseJSON');}};}();} MarketGidBaseBlockC19124 = function(root_id, ZN, fallback, containerId) { this.ZN = ZN; this.root = this.ZN.document.getElementById(root_id); this.containerId = containerId; this.LK = fallback; this.page = 1; this.iteration = 1; this.adlink = ''; this.template = ''; this.id = 19124; this.tickerShow = 0; this.SI = []; this.PA = {}; this.KU = {}; this.OG = []; this.DH = []; this.EO = []; this.afterRenderItemHooks = []; this.TG = ""; this.MGgeo = ""; this.GL = ""; this.MG = 0; this.EU = {}; this.BG = ""; this.PD = ""; this.SY = []; this.crashStep = 0; this.loadedDefault = false; this.ZC = 2; this.LD = 0; this.infIds = []; this.VE = []; this.realIds = []; this.VE['news8697'] = 'ab.'; this.CR = 'ab.'; this.SY['news'] = "marketgid.com"; this.HC = '8697'; this.EG = 'news'; this.infIds['news'] = '8697'; this.realIds['news'] = '8697'; this.VE['goods6921'] = 'ag.'; this.CR['goods'] = 'ag.'; this.SY['goods'] = "marketgid.com"; this.HC = '6921'; this.EG = 'goods'; this.infIds['goods'] = '6921'; this.realIds['goods'] = '6921'; this.BE = {}; this.KW = {}; this.BE.news = '<table class="mctable8697" > <tr> '; this.KW.news = ' </tr> </table>'; this.BE.goods = '<table class="mctable6921" > <tr> '; this.KW.goods = ' </tr> </table>'; this.OF = ''; this.YD = function(title,id,f_src,desc,ext,mirror,n) { if (this.OF=='news') { mirror = mirror ? mirror : this.ODs[this.GO]; var PP = this.ODsImages[this.GO]; this.template+='<td valign="top" class="mcteaser8697" style="width:100%; height:100%;"> <table cellpadding="0" cellspacing="1" style="width:100%; height:100%;"> <tr><td class="mctc8697" colspan="1" valign="top"><div class="mctitle8697"><a target="_blank" href="http://'+mirror+'/pnews/'+id+'/i/8697/pp/'+this.iteration+'/'+this.page+'/#k19124" class="mctitle8697">'+title+'</a></div></td></tr><tr><td style="height:100%;width:100%;" valign="top" class="mccc8697"><div class="mcimage8697"><a target="_blank" href="http://'+mirror+'/pnews/'+id+'/i/8697/pp/'+this.iteration+'/'+this.page+'/#k19124" ><img class="mcimage8697" width="140" height="140" src="http://imgn.'+PP+'/'+Math.floor(id/1000)+'/'+id+'_vb'+ext+'" /></a></div><div class="mcdesc8697"><a target="_blank" href="http://'+mirror+'/pnews/'+id+'/i/8697/pp/'+this.iteration+'/'+this.page+'/#k19124" class="mcdesc8697">'+desc+'</a></div></td></tr></table></td>'; if ( this.iteration%1 == 0 && this.iteration!=6){ this.template+='</tr><tr>'; } this.template+=' '; } else { mirror = this.ODs[this.GO]; var PP = this.ODsImages[this.GO]; this.template+='<td valign="top" class="mcteaser6921" style="width:100%; height:100%;"> <table cellpadding="0" cellspacing="1" style="width:100%; height:100%;"> <tr><td class="mctc6921" colspan="1" valign="top"><div class="mctitle6921"><a target="_blank" href="http://marketgid.com/ghits/'+n[1]+'/i/6921/'+this.GO+'/pp/'+this.iteration+'/'+this.page+'/k/'+n[6]+'#k19124" class="mctitle6921">'+((n[5] == '1')?('\u200d' + this.LV(n[3]) + '\u200d'):this.LV(n[3]))+'</a></div></td></tr><tr><td style="height:100%;width:100%;" valign="top" class="mccc6921"><div class="mcimage6921"><a target="_blank" href="http://marketgid.com/ghits/'+n[1]+'/i/6921/'+this.GO+'/pp/'+this.iteration+'/'+this.page+'/k/'+n[6]+'#k19124" ><img class="mcimage6921" width="140" height="140"src="http://imgg.'+PP+'/'+Math.floor(n[1]/1000)+'/'+n[1]+'_vb'+(n[2]==2?'.gif':'.jpg')+'" /></a></div><div class="mcdesc6921"><a target="_blank" href="http://marketgid.com/ghits/'+n[1]+'/i/6921/'+this.GO+'/pp/'+this.iteration+'/'+this.page+'/k/'+n[6]+'#k19124" class="mcdesc6921">'+((n[5] == '1')?('\u200e' + this.PJ(n[4]) + '\u200e'):this.PJ(n[4]))+'</a></div></td></tr></table></td>'; if ( this.iteration%1 == 0 && this.iteration!=6){ this.template+='</tr><tr>'; } this.template+=' '; } for (var i=0; i<this.afterRenderItemHooks.length; i++) { this[this.afterRenderItemHooks[i]](n); } this.iteration++; }; this.KA = function(str,limit) { if (str.length<=limit) return str; var word=new Array(); word=str.split(" "); var ret=word[0] + ' '; var test; for (i=1;i<word.length;i++){ test=ret+word[i]; if (test.length>limit) return ret+'...'; else ret+=word[i] + ' '; } return str; }; this.TN = function(str,limit){ var word=new Array(); var i; var ret=''; word=str.split(" "); for (i=0;i<word.length;i++){ if (word[i].length>limit && word[i].search(/&\w+;/)<0) ret+=word[i].substr(0,limit) + ' ' + word[i].substr(limit) + ' '; else ret+=word[i] + ' '; } return ret; }; this.LV = function(title) { if (this.OF=='news') { title=this.TN(title,15); title=this.KA(title,40); } else { title=this.TN(title,15); title=this.KA(title,40); } return title; }; this.PJ = function(desc) { if (this.OF=='news') { desc=this.TN(desc,15); desc=this.KA(desc,60); } else { desc=this.TN(desc,15); desc=this.KA(desc,60); } return desc; }; this.isArray = function(o) { return Object.prototype.toString.call(o) === '[object Array]'; }; this.GM = function() { if (!this.LK && this.ZN.document.getElementById("MarketGidPreloadC" + this.containerId)) { this.ZN.document.getElementById("MarketGidPreloadC" + this.containerId).style.display = 'none'; } }; this.MarketGidLoadNews = function(json){ this.GM(); for (var i=0; i<this.OG.length; i++) { this[this.OG[i]](); } var i; this.template=''; if (this.isArray(json)){ if (json.length==0) { return; } for(i=0; i<json.length; i++){ var n=json[i]; if (n[5] !=='undefined') srcDom = n[5]; if (this.isArray(n)){ if (!(n[1] in this.EU) && n[1]!='') { this.EU[n[1]]=1; this.YD(this.LV(n[3]),n[1],n[0],this.PJ(n[4]),(n[2]==2)?'.gif':'.jpg', n[5],n); } else this.EU[n[1]]++; } } if(this.root && this.template){ if (this.LK && this.MG==0) this.root.innerHTML = ""; this.root.innerHTML+= (this.MG==0?this.GL:"") + this.BG + this.BE[this.OF]+this.template+this.KW[this.OF] + this.PD; } } else { if (this.root && this.MG==0) { this.root.innerHTML=''; return; } } this.PA["page"] = this.page; this.PA['time'] = (new Date()).getTime(); this.setCookie(); if (this.OF=='news') { this.RQ('#MarketGidComposite19124 .mctable8697, #MarketGidComposite19124 .mctable8697 * {margin:0; padding:0; border:0; font-style:normal; font-size:100.01%; line-height:1; text-decoration:none; color:#000; line-height:1.1em;} #MarketGidComposite19124 .mctable8697{border-spacing:2px; margin:auto !important; font:11px Tahoma, Verdana, Arial;} #MarketGidComposite19124 .mctable8697{ font-family: Tahoma,Geneva,sans-serif; width: 200px; border-width: 1px; border-style: solid; border-color: #e6e6fa; background-color: #0066cc; } #MarketGidComposite19124 .mctable8697 *{ letter-spacing: 0em; } #MarketGidComposite19124 .mctitle8697{ font-weight: bold; color: #ffffff; } #MarketGidComposite19124 div.mctitle8697{ text-align: center; } #MarketGidComposite19124 .mctitle8697 *, #MarketGidComposite19124 .mctitle8697 cite{ color: #ffffff; } #MarketGidComposite19124 div.mcimage8697{ text-align: center; } #MarketGidComposite19124 .mcdesc8697{ font-weight: bold; color: #fff5ee; } #MarketGidComposite19124 div.mcdesc8697{ text-align: center; } #MarketGidComposite19124 .mcdesc8697 *, #MarketGidComposite19124 .mcdesc8697 cite{ color: #fff5ee; } #MarketGidComposite19124 div.mcsource8697{ text-align: center; } #MarketGidComposite19124 .mcsource8697{ text-decoration: underline; color: #4169e1; font-size: 12px; font-weight: bold; } #MarketGidComposite19124 .mcsource8697 *, #MarketGidComposite19124 .mcsource8697 cite{ color: #4169e1; } #MarketGidComposite19124 .mccc8697{ padding: 0px; } #MarketGidComposite19124 .mctc8697{ padding: 5px; border-width: 0px; border-style: solid; } '); } else { this.RQ('#MarketGidComposite19124 .mctable6921, #MarketGidComposite19124 .mctable6921 * {margin:0; padding:0; border:0; font-style:normal; font-size:100.01%; line-height:1; text-decoration:none; color:#000; line-height:1.1em;} #MarketGidComposite19124 .mctable6921{border-spacing:2px; margin:auto !important; font:11px Tahoma, Verdana, Arial;} #MarketGidComposite19124 .mctable6921{ font-family: Tahoma,Geneva,sans-serif; width: 200px; border-width: 1px; border-style: solid; border-color: #e6e6fa; background-color: #0066cc; } #MarketGidComposite19124 .mctable6921 *{ letter-spacing: 0em; } #MarketGidComposite19124 .mctitle6921{ font-weight: bold; color: #ffffff; } #MarketGidComposite19124 div.mctitle6921{ text-align: center; } #MarketGidComposite19124 .mctitle6921 *, #MarketGidComposite19124 .mctitle6921 cite{ color: #ffffff; } #MarketGidComposite19124 div.mcimage6921{ text-align: center; } #MarketGidComposite19124 .mcdesc6921{ font-weight: bold; color: #fff5ee; } #MarketGidComposite19124 div.mcdesc6921{ text-align: center; } #MarketGidComposite19124 .mcdesc6921 *, #MarketGidComposite19124 .mcdesc6921 cite{ color: #fff5ee; } #MarketGidComposite19124 .mcprice6921{ font-weight: bold; color: #f00; } #MarketGidComposite19124 .mcprice6921 *, #MarketGidComposite19124 .mcprice6921 cite{ color: #f00; } #MarketGidComposite19124 div.mcprice6921{ text-align: center; } #MarketGidComposite19124 .mcpriceold6921{ text-decoration: line-through; font-weight: bold; color: #f00; margin: 0+0+0+50%; } #MarketGidComposite19124 .mcpriceold6921 *, #MarketGidComposite19124 .mcpriceold6921 cite{ color: #f00; } #MarketGidComposite19124 .mcdiscount6921{ font-weight: bold; color: #f00; display: none; } #MarketGidComposite19124 .mcdiscount6921 *, #MarketGidComposite19124 .mcdiscount6921 cite{ color: #f00; } #MarketGidComposite19124 div.mcsource6921{ text-align: center; } #MarketGidComposite19124 .mcsource6921{ text-decoration: underline; color: #4169e1; font-size: 12px; font-weight: bold; } #MarketGidComposite19124 .mcsource6921 *, #MarketGidComposite19124 .mcsource6921 cite{ color: #4169e1; } #MarketGidComposite19124 .mccc6921{ padding: 0px; } #MarketGidComposite19124 .mctc6921{ padding: 5px; border-width: 0px; border-style: solid; } '); } this.MG++; for (var i=0; i<this.DH.length; i++) { this[this.DH[i]](); } }; this.YS = function() { var d = this.ZN.document, w = this.ZN, dE = 'documentElement', cH = 'clientHeight', cW = 'clientWidth', iH = 'innerHeight', iW = 'innerWidth', sH = 'scrollHeight', sW = 'scrollWidth', oH = 'offsetHeight', oW = 'offsetWidth', oL = 'offsetLeft', oT = 'offsetTop', sT = 'scrollTop', sL = 'scrollLeft'; if (w[iW]) { return {"c": w[iH], "s": w.pageYOffset}; } else if (d[dE] && d[dE][cW]) { return {"c": d[dE][cH], "s": d[dE][sT]}; } else if (d.body[cW]) { return {"c": d.body[cH], "s": d.body[sT]}; } return 0; }; this.MarketGidRedirectCompositeMax = function(arr, rId, rType) { this.OF = rType; this.blockId = rId; this.MarketGidLoadNews(arr); }; this.MarketGidRedirectComposite = function(type, id, rType, rId, arr) { if (this.crashWorkerTimeout) { clearTimeout(this.crashWorkerTimeout); } if (this.LD>=this.ZC || this.crashStep == 2) { this.MarketGidRedirectCompositeMax(arr, rId, rType); } else { if (this.VE[type + id]) { if (this.crashStep == 1) this.crashStep++; id = this.realIds[type]; this.blockId = id; this.blockType = type; this.subdomain = this.VE[type + id]; this.PA["mg_id"] = id; this.PA["mg_type"] = type; this.setCookie(); this.TG = 'http://'+this.subdomain+this.blockType+'block.'+this.SY[this.blockType]+'/p/'+this.MGgeo+'j/'+this.blockId+'/'; this.XL(); this.LD++; } } }; this.crashWorker = function() { if (MarketGidInfC19124.template == '' && !MarketGidInfC19124.loadedDefault) { MarketGidInfC19124.crashStep = 1; var currentType = MarketGidInfC19124.OF ? MarketGidInfC19124.OF : MarketGidInfC19124.EG; var anotherType = currentType == 'news' ? 'goods' : 'news'; MarketGidInfC19124.MarketGidRedirectComposite(anotherType, MarketGidInfC19124.infIds[anotherType], currentType, MarketGidInfC19124.infIds[currentType], []); } }; this.init = function() { if (this.root) { this.getCookie(); var cookie = this.PA["page"]; this.SI = this.root.getElementsByTagName('a'); if(cookie!=null&&parseInt(cookie)<20&&parseInt(cookie)>0) this.page=parseInt(cookie)+1; else if (parseInt(cookie)>19||parseInt(cookie)<1) this.page=1; if ((new Date()).getTime() - (this.PA['time']!=undefined ? this.PA['time'] : 0) >= 6e5) this.page = 1; if (!this.page) this.page = 1; this.pageUnlim = this.page - 1; this.PA["page"] = this.page; this.setCookie(); if (!this.ZN.document.cookie) { var dt = new Date(); this.page = dt.getSeconds()%20+1; } this.blockId = this.PA["mg_id"] ? this.PA["mg_id"] : this.HC; this.blockType = this.PA["mg_type"] ? this.PA["mg_type"] : this.EG; if (this.VE[this.blockType + this.blockId]) this.subdomain = this.VE[this.blockType + this.blockId]; else { this.subdomain = this.CR; this.blockId = this.HC; this.blockType = this.EG; } this.TG = 'http://'+this.subdomain+this.blockType+'block.'+this.SY[this.blockType]+'/p/'+this.MGgeo+'j/'+this.blockId+'/'; this.ZN.MarketGidLoadNews8697 = function(json) { MarketGidInfC19124.OF = 'news'; MarketGidInfC19124.MarketGidLoadNews(json); }; this.ZN.MarketGidRedirectComposite8697 = function(type, id, rType, rId, arr) { MarketGidInfC19124.MarketGidRedirectComposite(type, id, rType, rId, arr); }; this.ZN.MarketGidLoadGoods6921 = function(json) { MarketGidInfC19124.OF = 'goods'; MarketGidInfC19124.MarketGidLoadNews(json); }; this.ZN.MarketGidRedirectComposite6921 = function(type, id, rType, rId, arr) { MarketGidInfC19124.MarketGidRedirectComposite(type, id, rType, rId, arr); }; for (var i=0; i<this.EO.length; i++) { this[this.EO[i]](); } } }; this.XL = function() { var script = this.ZN.document.createElement('script'); script.type = 'text/javascript'; script.charset = 'utf-8'; script.src=this.TG+this.page; this.root.parentNode.appendChild(script); }; this.RQ = function(style) { var MGst=this.ZN.document.createElement('style'); MGst.type = 'text/css'; this.root.parentNode.appendChild(MGst); if (MGst.styleSheet) { MGst.styleSheet.cssText = style; } else {MGst.appendChild(this.ZN.document.createTextNode(style))}; this.root.parentNode.appendChild(MGst); }; this.start = function() { if (this.root) { this.XL(); } }; this.addEvent = function(elem, type, handler) { if (elem.addEventListener) { elem.addEventListener(type, handler, false) } else { elem.attachEvent('on' + type, handler) } }; }; var mgCanLoad19124 = false; var mgFallback19124 = false; if (document.getElementById("MG_ID")) mgCanLoad19124 = true; if (document.getElementById("MarketGidComposite19124")) { mgCanLoad19124 = true; mgFallback19124 = true; } if (mgCanLoad19124) { if (!mgFallback19124) { var rootId19124 = document.getElementById("MG_ID").innerHTML; var div19124 = parent.window.document.createElement('div'); div19124.id = "MarketGidComposite19124"; parent.window.document.getElementById("MarketGidScriptRootC" + rootId19124).appendChild(div19124); MarketGidInfC19124 = new MarketGidBaseBlockC19124("MarketGidComposite19124", parent.window, false, rootId19124); } else { MarketGidInfC19124 = new MarketGidBaseBlockC19124("MarketGidComposite19124", window, true, 0); } MarketGidCCookieBlock19124 = function() { this.SE = function() { var name = "MarketGidStorage"; var matches = this.ZN.document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)")); var res = {}; if (matches) { try { res = MarketGidJSON.parse(decodeURIComponent(matches[1])); } catch (e) {}; } return res; }; this.getCookie = function() { var value = this.SE(); if (value["C19124"]!=undefined) { this.PA = value["C19124"]; } else this.PA = {}; if (value["0"]!=undefined) { this.KU = value["0"]; } else this.KU = {}; }; this.setCookie = function() { var totalCookie = this.SE(); totalCookie["C19124"] = this.PA; totalCookie["0"] = this.KU; var value = encodeURIComponent(MarketGidJSON.stringify(totalCookie)); this.ZN.document.cookie = "MarketGidStorage="+value+";path=/"; }; }; MarketGidCCookieBlock19124.call(MarketGidInfC19124); MarketGidCSubnetsBlock19124 = function() { this.EO.push("UT"); this.GO = ""; this.ODs = {}; this.ODsImages = {}; this.ODsAdvert = {}; this.ODs['0'] = 'marketgid.com'; this.ODsImages['0'] = 'dt00.net'; this.ODsAdvert['0'] = 'http://usr.marketgid.com/demo/goods/'; this.ODs['1'] = 'ladycenter.ru'; this.ODsImages['1'] = 'dt00.net'; this.ODsAdvert['1'] = 'http://usr.marketgid.com/demo/goods/'; this.ODs['2'] = 'tovarro.com'; this.ODsImages['2'] = 'tovarro.com'; this.ODsAdvert['2'] = 'http://tovarro.com/clients.html?utm_source=links_mg&utm_medium=text&utm_campaign=add_goods'; this.ODs['3'] = 'lentainform.com'; this.ODsImages['3'] = 'dt00.net'; this.ODsAdvert['3'] = 'http://lentainform.com/'; this.UT = function() { this.ZN.MarketGidLoadNews8697 = function(json) { MarketGidInfC19124.OF = 'news'; MarketGidInfC19124.GO = '0'; MarketGidInfC19124.MarketGidLoadNews(json); }; this.ZN.MarketGidRedirectComposite8697 = function(type, id, rType, rId, arr) { MarketGidInfC19124.GO = '0'; MarketGidInfC19124.MarketGidRedirectComposite(type, id, rType, rId, arr); }; this.ZN.TovarroLoadNews8697 = function(json) { MarketGidInfC19124.OF = 'news'; MarketGidInfC19124.GO = '2'; MarketGidInfC19124.MarketGidLoadNews(json); }; this.ZN.TovarroRedirectComposite8697 = function(type, id, rType, rId, arr) { MarketGidInfC19124.GO = '2'; MarketGidInfC19124.MarketGidRedirectComposite(type, id, rType, rId, arr); }; this.ZN.LentaInformLoadNews8697 = function(json) { MarketGidInfC19124.OF = 'news'; MarketGidInfC19124.GO = '3'; MarketGidInfC19124.MarketGidLoadNews(json); }; this.ZN.LentaInformRedirectComposite8697 = function(type, id, rType, rId, arr) { MarketGidInfC19124.GO = '3'; MarketGidInfC19124.MarketGidRedirectComposite(type, id, rType, rId, arr); }; this.ZN.MarketGidLoadGoods6921 = function(json) { MarketGidInfC19124.OF = 'goods'; MarketGidInfC19124.GO = '0'; MarketGidInfC19124.MarketGidLoadNews(json); }; this.ZN.MarketGidRedirectComposite6921 = function(type, id, rType, rId, arr) { MarketGidInfC19124.GO = '0'; MarketGidInfC19124.MarketGidRedirectComposite(type, id, rType, rId, arr); }; this.ZN.TovarroLoadGoods6921 = function(json) { MarketGidInfC19124.OF = 'goods'; MarketGidInfC19124.GO = '2'; MarketGidInfC19124.MarketGidLoadNews(json); }; this.ZN.TovarroRedirectComposite6921 = function(type, id, rType, rId, arr) { MarketGidInfC19124.GO = '2'; MarketGidInfC19124.MarketGidRedirectComposite(type, id, rType, rId, arr); }; this.ZN.LentaInformLoadGoods6921 = function(json) { MarketGidInfC19124.OF = 'goods'; MarketGidInfC19124.GO = '3'; MarketGidInfC19124.MarketGidLoadNews(json); }; this.ZN.LentaInformRedirectComposite6921 = function(type, id, rType, rId, arr) { MarketGidInfC19124.GO = '3'; MarketGidInfC19124.MarketGidRedirectComposite(type, id, rType, rId, arr); }; }; }; MarketGidCSubnetsBlock19124.call(MarketGidInfC19124); MarketGidCAntifraudBlock19124 = function() { this.DH.push("SX"); this.EO.push("initAntiFraud"); this.CA = ""; this.JA = ""; this.IU = ""; this.OJ = ""; this.CB = ""; this.XD = ""; this.DR = ""; this.YB = ""; this.initAntiFraud = function() { if (this.KU["svspr"]==undefined) { this.IU = this.DP(this.ZN.document.referrer,500); this.KU["svspr"] = this.IU; this.setCookie(); } else this.IU = this.KU["svspr"]; if (this.KU["svsds"]!=undefined) { this.OJ = this.KU["svsds"]; this.OJ++; } else this.OJ = 1; this.KU["svsds"] = this.OJ; this.setCookie(); var D=new Date(); this.CA = D.getTime() + '19124' + Math.floor(Math.random()*100) + '' + (2*Math.floor(Math.random()*4)+1); this.YB = D.getTime(); if (this.KU["TejndEEDj"]==undefined) { this.KU["TejndEEDj"] = this.x64String(this.CA); this.setCookie(); } }; this.x64String = function(s) { s=s.toString(); s=unescape(encodeURIComponent(s)); var b64c='\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x24\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x2a\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d'; var b64e=''; var c1,c2,c3,c4,e1,e2,e3,e4; for (var i=0; i<s.length;) { c1=s.charCodeAt(i++); c2=2<<5; e1=c1>>(c2/32); c3=s.charCodeAt(i++); e2=((c1&3)<<(c2/16))|(c3>>(c2/16)); c4=s.charCodeAt(i++); e3=isNaN(c3)?c2:(((c3&15)<<(c2/32))|(c4>>(c2-58))); e4=isNaN(c4)?c2:(c4&(c2-1)); b64e+=b64c.charAt(e1)+b64c.charAt(e2)+b64c.charAt(e3)+b64c.charAt(e4); } return b64e; }; this.WX = function(n) { return n?Math.round(n).toString(16):''; }; this.DP = function(str,n){ return str.length > n ? str.substring(0,n) : str; }; this.backHref = function() { if (MarketGidInfC19124.CB && MarketGidInfC19124.XD) MarketGidInfC19124.XD['\x68\x72\x65\x66']=MarketGidInfC19124.CB; MarketGidInfC19124.DR=""; }; this.getCoordsElementOfPage = function(element) { var offsetLeft = 0, offsetTop = 0; do { offsetLeft += element.offsetLeft; offsetTop += element.offsetTop; } while (element = element.offsetParent); return {"x":offsetLeft, "y":offsetTop}; }; this.getCoordsClickOfPage = function(e) { var x = 0, y = 0; if (!e) e = this.ZN.event; if (e.pageX || e.pageY) { x = e.pageX; y = e.pageY; } else if (e.clientX || e.clientY) { x = e.clientX + (this.ZN.document.documentElement.scrollLeft || this.ZN.document.body.scrollLeft) - this.ZN.document.documentElement.clientLeft; y = e.clientY + (this.ZN.document.documentElement.scrollTop || this.ZN.document.body.scrollTop) - this.ZN.document.documentElement.clientTop; } return {"x":x, "y":y}; }; this.KR = function() { return window.navigator.javaEnabled() ? 1 : 0; }; this.UH = function() { var flashEnabled = 0; if (typeof(navigator.plugins)!="undefined" && typeof(navigator.plugins["Shockwave Flash"])=="object") { flashEnabled = 1; } else if (typeof window.ActiveXObject != "undefined") { try { if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) { flashEnabled = 1; } } catch(e) {}; } return flashEnabled; }; this.addParams = function(event, link) { if (link.className && link.className.indexOf("mg_addad")>=0) return; var D=new Date(); var e=event||this.ZN.event; var coordClickOfPage = this.getCoordsClickOfPage(e); link.style.display='block'; var b=link.getBoundingClientRect(); var coordLinkOfPage = this.getCoordsElementOfPage(link); var d=this.ZN.document; var MG_p=/pp\/([0-9]+)\/([0-9]+)\/(k\/)?(?:s\/\d+\/(?:n\/\d+\/)?)?#k([0-9]+)\??(\S*)/; var MG_nn=MG_p.exec(link.href); this.CB=link.href; this.XD=link; if (MG_nn) link.href = link.href.replace(MG_p, 'pp/' + MG_nn[1] + '/' + MG_nn[2] + '/' +(MG_nn[3]?MG_nn[3]:'') + (MG_nn[5]?'?'+MG_nn[5]+'&':'?') + 'k=' + MG_nn[4] + 'f'); else { var index = link.href.indexOf('?k=19124f'); if (index != -1) { link.href = link.href.substr(0, index) + '?k=19124f'; } else { index = link.href.indexOf('&k=19124f'); if (index != -1) { link.href = link.href.substr(0, index) + '&k=19124f'; } else { index = link.href.indexOf('?'); if (index != -1) { link.href += '&k=19124f'; } } } } var UY = 0; if (this.ZN.opera) UY+=1; if (this.ZN.opera&&this.ZN.opera.buildNumber) UY+=2; if (this.ZN.document.all) UY+=4; if (!this.ZN.btoa||this.ZN.navigator.msPointerEnabled) UY+=8; if (this.ZN.chrome) UY+=16; if (this.ZN.mozInnerScreenX!=undefined) UY+=32; if (!this.ZN.external) UY+=64; var HK=''; for (var i=1;i<=Math.ceil((UY+1)/68)*31;i++) { if((i%26==0)||((i%26==6)&&(((i%26)+5)%11==0)))continue; HK+=(i==1?'':String.fromCharCode(102))+String.fromCharCode(96+(i%26))+String.fromCharCode(83); var HP=''; if(i>31)break; switch(i){ case 1:HP=this.CA;break; case 2:HP=this.WX(b.bottom);break; case 3:HP=this.WX(this.YB);break; case 4:HP=this.WX(D.getTime());break; case 5:HP=this.WX(d.body.clientheight);break; case 7:HP=this.WX(e.clientX);break; case 8:HP=this.WX(e.clientY);break; case 9:HP=this.WX(b.left);break; case 11:HP=this.WX(b.top);break; case 12:HP=this.WX(d.body.clientheight-e.clientY);break; case 13:HP=this.WX(b.right-b.left);break; case 14:HP=this.WX(b.bottom-b.top);break; case 15:HP=this.DR;break; case 16:HP=this.WX(e.clientY);break; case 17:HP=this.WX(UY);break; case 18:HP=this.WX(link['\x72\x65\x6C']);break; case 19:HP=this.DP(d.location.href,500);break; case 20:HP=this.DP(d.referrer,500);break; case 21:HP=this.IU;break; case 22:HP=this.WX(this.OJ);break; case 23:HP=this.WX(coordClickOfPage.x);break; case 24:HP=this.WX(coordClickOfPage.y);break; case 25:HP=this.WX(coordLinkOfPage.x);break; case 27:HP=this.WX(coordLinkOfPage.y);break; case 28:HP=this.WX(this.KR());break; case 29:HP=this.WX(this.UH());break; case 30:HP=this.WX(window.screen.width);break; case 31:HP=this.WX(window.screen.height);break; } HK+=this.x64String(HP); } link['\x72\x65\x6C']=''; link['\x68\x72\x65\x66']=link['\x68\x72\x65\x66']+encodeURIComponent(HK); }; this.linkClick = function(event) { MarketGidInfC19124.addParams(event, this); MarketGidInfC19124.ZN.setTimeout(MarketGidInfC19124.backHref,100); return true; }; this.linkMouseOver = function(event) { MarketGidInfC19124.addParams(event, this); var v=parseInt(this['\x72\x65\x6C'])?parseInt(this['\x72\x65\x6C']):0; if (v%2!=1) this['\x72\x65\x6C']=v+1; }; this.UC = function(event) { var v=parseInt(this['\x72\x65\x6C'])?parseInt(this['\x72\x65\x6C']):0; if ((v>>1)%2!=1) this['\x72\x65\x6C']=v+2; }; this.SX = function() { if (this.root) { this.SI = this.root.getElementsByTagName('a'); } for (var MG_l in this.SI) { this.SI[MG_l].onmouseup = this.linkClick; this.SI[MG_l].onmouseover = this.linkMouseOver; this.SI[MG_l].onmousemove = this.UC; } }; }; MarketGidCAntifraudBlock19124.call(MarketGidInfC19124); MarketGidCDiscountBlock19124 = function() { this.DH.push("CU"); this.AG = function(event) { MarketGidInfC19124.helpIE(this); var pricesold = this.getElementsByClassName('mcpriceold6921'); var prices = this.getElementsByClassName('mcprice6921'); var discounts = this.getElementsByClassName('mcdiscount6921'); if (pricesold.length > 0) { pricesold[0].style.display = 'none'; prices.length > 1 ? prices[1].style.display = 'none' : null; discounts.length > 0 ? discounts[0].style.display = 'inline' : null; } }; this.ES = function(event) { MarketGidInfC19124.helpIE(this); var discounts = this.getElementsByClassName('mcdiscount6921'); var prices = this.getElementsByClassName('mcprice6921'); var pricesold = this.getElementsByClassName('mcpriceold6921'); if (pricesold.length > 0) { discounts.length > 0 ? discounts[0].style.display = 'none' : null; prices.length > 1 ? prices[1].style.display = 'inline' : null; pricesold[0].style.display = 'inline'; } }; this.CU = function() { if (this.root) { this.helpIE(this.root); var teasers = this.root.getElementsByClassName('mcteaser6921'); } for (var MG_t in teasers) { teasers[MG_t].onmouseout = this.ES; teasers[MG_t].onmouseover = this.AG; } }; this.helpIE = function(el) { if (el.getElementsByClassName == undefined) { el.getElementsByClassName = function(cl) { var retnode = []; var myclass = new RegExp('\\b'+cl+'\\b'); var elem = this.getElementsByTagName('*'); for (var i = 0; i < elem.length; i++) { var classes = elem[i].className; if (myclass.test(classes)) retnode.push(elem[i]); } return retnode; }; } }; }; MarketGidCDiscountBlock19124.call(MarketGidInfC19124); MarketGidCCountersBlock19124 = function() { this.EO.push("AF"); this.AF = function() { if(!this.ZN.MGCnt){ this.ZN.MGCnt = new Image(); var MGDCnt = new Date(); this.ZN.MGCnt.src = 'http://counter.marketgid.com/images/mui.gif?'+MGDCnt.getYear()+MGDCnt.getMonth()+MGDCnt.getDay()+MGDCnt.getHours(); new Image().src = "//counter.yadro.ru/hit;Mgidohvat?r"+escape(this.ZN.document.referrer)+((typeof(screen)=="undefined")?"":";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?screen.colorDepth:screen.pixelDepth))+";u"+escape(this.ZN.document.URL)+";"+Math.random(); } }; this.DH.push("liveCountersLoad"); this.liveCountersLoad = function() { var counterName = 'MGCnt' + ((this.OF=='news') ? 'ni' : 'ti'); if (!this.ZN[counterName]) { this.ZN[counterName] = new Image(); this.ZN[counterName].src = "//counter.yadro.ru/hit;Mgidohvat/" + ((this.OF=='news') ? 'ni' : 'ti') + "?r"+escape(this.ZN.document.referrer)+((typeof(screen)=="undefined")?"":";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?screen.colorDepth:screen.pixelDepth))+";u"+escape(this.ZN.document.URL)+";"+Math.random(); } } }; MarketGidCCountersBlock19124.call(MarketGidInfC19124); MarketGidCAdvertLinkBlock19124 = function() { this.OG.push("refreshAdvertLink"); this.EO.push("loadAdvertLink"); this.advertLinkNeeded = true; this.loadAdvertLink = function() { if (this.ZN.document.getElementById('mg_add19124')) this.advertLinkNeeded = true; else this.advertLinkNeeded = false; }; this.refreshAdvertLink = function() { if (this.advertLinkNeeded) { try { if (this.ODs[this.GO] == 'tovarro.com') { this.GL = '<a class="mg_addad19124" href="http://tovarro.com/"><img style="border:0;" src="http://img.tovarro.com/images/logo.png" alt="logo">Добавить свое объявление</a><style type="text/css">.mg_addad19124{display:block; padding:1px 0 1px 1px; font:700 11px Tahoma, Arial, sans-serif;color:#009966;}</style>'; } else if (this.ODs[this.GO] == 'lentainform.com') { this.GL = '<a class="mg_addad19124" href="http://lentainform.com/"><!--<img style="border:0;" src="http://lentainform.com/img/lentainform_informer_logo.gif" alt="logo">-->Добавить свое объявление</a><style type="text/css">.mg_addad19124{display:block; padding:1px 0 1px 1px; font:700 11px Tahoma, Arial, sans-serif;color:#009966;}</style>'; } else { this.GL = '<a href="'+this.ODsAdvert[this.GO]+'?utm_source=popunder&utm_medium=text&utm_campaign=add" class="mg_addad19124" target="_blank">Добавить свое объявление</a><style type="text/css">.mg_addad19124{display:block; padding:1px 0 1px 25px; font:700 11px Tahoma, Arial, sans-serif;background:url(http://img.dt00.net/images/search/2/icon-2.png) 5px 0 no-repeat;color:#009966;}</style>'; } } catch (e) { }; } else { this.GL = ''; } }; }; MarketGidCAdvertLinkBlock19124.call(MarketGidInfC19124); MarketGidCTrafmagBlock19124 = function() { this.DH.push("trafmagLoader"); this.afterRenderItemHooks.push("trafmagIdChecker"); this.trafmagIds = []; this.trafmagIdCount = 0; this.trafmagLoaded = false; this.replacedTitle = false; this.replacedDescr = false; this.replacedPrice = false; this.trafmagLoader = function() { if (!this.trafmagLoaded && this.trafmagIds.length>0 && this.OF=='goods') { this.ZN.TrafmagLoadGoods19124 = this.TrafmagLoadGoods; this.injectTrafmagScript(); } }; this.trafmagIdChecker = function(n) { if (n[5] == '1' && !this.trafmagIds[n[1]]) { this.trafmagIds.push(n[1]); } }; this.injectTrafmagScript = function() { var script = this.ZN.document.createElement('script'); script.type = 'text/javascript'; script.src = "http://trafmag.com/mgidcode-19124.js?cnt=" + this.trafmagIds.length; script.charset = "utf-8"; this.root.parentNode.appendChild(script); }; this.TrafmagLoadGoods = function(response) { MarketGidInfC19124.trafmagLoaded = true; for (var j=0; j<response.length; j++) { var json = response[j]; var links = MarketGidInfC19124.root.getElementsByTagName('A'); var images = MarketGidInfC19124.root.getElementsByTagName('IMG'); for (var i = 0; i < links.length; i++) { if (links[i].href.indexOf('/' + MarketGidInfC19124.trafmagIds[j] + '/')!==-1) { links[i].href = links[i].href.replace(/#k[0-9]*/, ''); if (links[i].href.indexOf('?k=')!==-1) { links[i].href = links[i].href.replace("?k=", "?u=" + encodeURIComponent(MarketGidInfC19124.x64String(json[0])) + "&k="); } else { links[i].href += "?u=" + encodeURIComponent(MarketGidInfC19124.x64String(json[0])); } } } for (var i = 0; i < images.length; i++) { if (images[i].src.indexOf('/' + MarketGidInfC19124.trafmagIds[j])!==-1) { images[i].src = json[1]; } } MarketGidInfC19124.replacedTitle = false; MarketGidInfC19124.replacedDescr = false; MarketGidInfC19124.replacedPrice = false; MarketGidInfC19124.TrafmagSpider(MarketGidInfC19124.root, json); } }; this.TrafmagSpider = function(element, json) { var nodes = element.childNodes; if (element.nodeType == 3 && element.nodeValue.replace(/^\s+|\s+$/g, "") != '') { try { if (element.nodeValue.indexOf('\u200d')!==-1 && !MarketGidInfC19124.replacedTitle) { element.parentNode.innerHTML = element.parentNode.innerHTML.replace(/\u200d.*\u200d/, json[2]); MarketGidInfC19124.replacedTitle = true; } if (element.nodeValue.indexOf('\u200e')!==-1 && !MarketGidInfC19124.replacedDescr) { element.parentNode.innerHTML = element.parentNode.innerHTML.replace(/\u200e.*\u200e/, json[3]); MarketGidInfC19124.replacedDescr = true; } if (element.nodeValue.indexOf('\u200f')!==-1 && !MarketGidInfC19124.replacedPrice) { element.parentNode.innerHTML = element.parentNode.innerHTML.replace(/\u200f.*\u200f/, json[4]); MarketGidInfC19124.replacedPrice = true; } } catch (e) { }; } for (var i=0; i< nodes.length; i++) { MarketGidInfC19124.TrafmagSpider(nodes[i], json); } }; }; MarketGidCTrafmagBlock19124.call(MarketGidInfC19124); MarketGidInfC19124.init(); MarketGidInfC19124.start(); } 