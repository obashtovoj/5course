s5_ls_Effects = {};



s5_ls_Effects.s5_ls_fade = function(s5_ls_id, s5_ls_opacStart, s5_ls_opacEnd, s5_ls_duration, s5_ls_callback)

{

	s5_ls_Effects.s5_ls_changeOpacity(0, s5_ls_id);

	var s5_ls_speed = Math.round(s5_ls_duration/100);

	var s5_ls_timer = 0;



	if(s5_ls_opacStart > s5_ls_opacEnd)

	{

		for(var s5_ls_i=s5_ls_opacStart; s5_ls_i>=s5_ls_opacEnd; s5_ls_i--)

		{

			setTimeout("s5_ls_Effects.s5_ls_changeOpacity("+ s5_ls_i +", '"+ s5_ls_id +"', "+ s5_ls_opacEnd +", '"+ s5_ls_callback +")", (s5_ls_timer*s5_ls_speed));

			s5_ls_timer++;

		}

	}

	else if(s5_ls_opacStart < s5_ls_opacEnd)

	{

		for(var s5_ls_i=s5_ls_opacStart; s5_ls_i<=s5_ls_opacEnd; s5_ls_i++)

		{

			setTimeout("s5_ls_Effects.s5_ls_changeOpacity("+ s5_ls_i +", '"+ s5_ls_id +"', "+ s5_ls_opacEnd +", '"+ s5_ls_callback +"')", (s5_ls_timer*s5_ls_speed));

			s5_ls_timer++;

		}

	}

}



s5_ls_Effects.s5_ls_changeOpacity = function(s5_ls_opacity, s5_ls_id, s5_ls_endPoint, s5_ls_callback)

{

	var s5_ls_style = document.getElementById(s5_ls_id).style;

    s5_ls_style.opacity = (s5_ls_opacity / 100);

    s5_ls_style.MozOpacity = (s5_ls_opacity / 100);

    s5_ls_style.KhtmlOpacity = (s5_ls_opacity / 100);

    s5_ls_style.filter = "alpha(opacity=" + s5_ls_opacity + ")";

	

	if(s5_ls_opacity == s5_ls_endPoint && s5_ls_callback != null)

	{

		eval(s5_ls_callback);

	}

}



s5_ls_Effects.s5_ls_onFaded = function()

{

	// Add callback code here

}

//Ajax call lib



jx = {

		http:false, //HTTP Object

		format:'text',

		callback:function(data){},

		error:false,

		//Create a xmlHttpRequest object - this is the constructor. 

		getHTTPObject : function() {

			var http = false;

			//Use IE's ActiveX items to load the file.

			if(typeof ActiveXObject != 'undefined') {

				try {http = new ActiveXObject("Msxml2.XMLHTTP");}

				catch (e) {

					try {http = new ActiveXObject("Microsoft.XMLHTTP");}

					catch (E) {http = false;}

				}

			//If ActiveX is not available, use the XMLHttpRequest of Firefox/Mozilla etc. to load the document.

			} else if (XMLHttpRequest) {

				try {http = new XMLHttpRequest();}

				catch (e) {http = false;}

			}

			return http;

		},

		// This function is called from the user's script. 

		//Arguments - 

		//	url	- The url of the serverside script that is to be called. Append all the arguments to 

		//			this url - eg. 'get_data.php?id=5&car=benz'

		//	callback - Function that must be called once the data is ready.

		//	format - The return type for this function. Could be 'xml','json' or 'text'. If it is json, 

		//			the string will be 'eval'ed before returning it. Default:'text'

		load : function (url,callback,format) {

			this.init(); //The XMLHttpRequest object is recreated at every call - to defeat Cache problem in IE

			if(!this.http||!url) return;

			if (this.http.overrideMimeType) this.http.overrideMimeType('text/xml');



			this.callback=callback;

			if(!format) var format = "text";//Default return type is 'text'

			this.format = format.toLowerCase();

			var ths = this;//Closure

			

			//Kill the Cache problem in IE.

			var now = "uid=" + new Date().getTime();

			url += (url.indexOf("?")+1) ? "&" : "?";

			url += now;



			this.http.open("GET", url, true);



			this.http.onreadystatechange = function () {//Call a function when the state changes.

				if(!ths) return;

				var http = ths.http;

				if (http.readyState == 4) {//Ready State will be 4 when the document is loaded.

					if(http.status == 200) {

						var result = "";

						if(http.responseText) result = http.responseText;

						//If the return is in JSON format, eval the result before returning it.

						if(ths.format.charAt(0) == "j") {

							//\n's in JSON string, when evaluated will create errors in IE

							result = result.replace(/[\n\r]/g,"");

							result = eval('('+result+')'); 

						}

		

						//Give the data to the callback function.

						if(ths.callback) ths.callback(result);

					} else { //An error occured

						if(ths.error) ths.error(http.status);

					}

				}

			}

			this.http.send(null);

		},

		init : function() {this.http = this.getHTTPObject();}

	}



