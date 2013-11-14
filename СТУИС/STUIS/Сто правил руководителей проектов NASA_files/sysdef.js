function CMSRedirect(redirectUrl) {
	
  var fappVer = parseFloat(navigator.appVersion);
  var targetPrintVerTested = ( navigator.userAgent.indexOf("Windows 95")>=0 || navigator.userAgent.indexOf("Windows 98")>=0 || navigator.userAgent.indexOf("Windows NT")>=0)&&(navigator.userAgent.indexOf('Opera')==1)||navigator.userAgent.indexOf('Firefox')||(navigator.appName == 'Netscape')||((navigator.userAgent.indexOf('MSIE') > -1)&&(fappVer >=4));	
  if (targetPrintVerTested)
  {
     redirect_location = "http://bigc.ru/bitrix/redirect/?http://" + redirectUrl;
     window.open(redirect_location);
  }
  
}












