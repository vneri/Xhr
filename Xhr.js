var Xhr={	
	GET:function(url, callback, param){
		var xmlhttp;
		if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		} else {// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}		
		
		
		xmlhttp.onreadystatechange=function(){
			if (xmlhttp.readyState==4 && xmlhttp.status==200){
				callback(xmlhttp.responseText, param);
			}
		}
		
		xmlhttp.open("GET",url,true);
		//xmlhttp.setRequestHeader("Authorization", "Basic " + btoa('user' + ":" + 'pass'));
		xmlhttp.send();
	},

	POST:function(url, parameters, callback, param){
		var xmlhttp;
		if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		} else {// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}		
		
		
		xmlhttp.onreadystatechange=function(){
			if (xmlhttp.readyState==4){
				callback(xmlhttp.responseText, param);
			}
		}
		
		xmlhttp.open("POST",url,true);
		//xmlhttp.setRequestHeader("Authorization", "Basic " + btoa('user' + ":" + 'pass'));
		xmlhttp.send(JSON.stringify(parameters));
	}
}
