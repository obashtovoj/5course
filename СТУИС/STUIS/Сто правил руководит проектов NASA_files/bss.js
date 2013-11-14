
function ht_get_flashVersion() {
      // Test Internet Explorer
      var ua = navigator.userAgent.toLowerCase();
      var isIE = (ua.indexOf("msie") != -1 && ua.indexOf("opera") == -1 && ua.indexOf("webtv") == -1);
      
      // переменные
      var version = 0;
      var lastVersion = 16; 
      var i;
      if (isIE) { // browser == IE
            try {
                  for (i = 3; i <= lastVersion; i++) {
                        if (eval('new ActiveXObject("ShockwaveFlash.ShockwaveFlash.'+i+'")')) {
                              version = i;
                        }
                  }
            } catch(e) {}
      } else { // browser != IE
            for (i = 0; i < navigator.plugins.length; i++) {
                  if (navigator.plugins[i].name.indexOf('Flash') > -1) {
                        version = (parseInt(navigator.plugins[i].description.charAt(16)) > version) ? parseInt(navigator.plugins[i].description.charAt(16)) : version;
                  }
            }
      }
      return version;
}

var SWFPlugin = ht_get_flashVersion();


if (SWFPlugin > 0)
{
    document.write ('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ');
    document.write ('codebase="http://active.macromedia.com/flash4/cabs/swflash.cab#version=4,0,0,0" ');
    document.write ('id="MovieBNS_bn_qm_csd" width="190" height="400"> ');
    document.write ('<param name="movie" value="http://images.bigc.ru/bss/bn_qm_csd.swf"> ');
    document.write ('<param name="quality" value="high"> ');
    document.write ('<param name="bgcolor" value="#FFFFFF"> ');
    document.write ('<embed name="MovieBNS_EMB_bn_qm_csd" src="http://images.bigc.ru/bss/bn_qm_csd.swf" quality="high" bgcolor="#FFFFFF" ');
    document.write ('width="190" height="400" ');
    document.write ('type="application/x-shockwave-flash" ');
    document.write ('pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"> ');
    document.write ('</embed> ');
    document.write ('</object> ');
}
else
{
    var BNSNavLineBanner = 'BN190X400NOFLASH';    

}








