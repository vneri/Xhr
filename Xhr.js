var Xhr={	
	GET:function(url, callback, body, auth){
		var xmlhttp;
		if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		} else {// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}		
		
		
		xmlhttp.onreadystatechange=function(){
			
			if (xmlhttp.readyState==4 && xmlhttp.status==200){
				callback(xmlhttp.responseText);
			}
		}
		
		xmlhttp.open("GET",url,true);
		if (auth != undefined)
			xmlhttp.setRequestHeader("Authorization", "Basic " + btoa(auth['username'] + ":" + auth['password']));
		xmlhttp.send(body);
	},

	POST:function(url, callback, body, auth, contentType){
		var xmlhttp;
		if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		} else {// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}		
		
		
		xmlhttp.onreadystatechange=function(){
			if (xmlhttp.readyState==4){
				callback(xmlhttp.responseText);
			}
		}
		
		xmlhttp.open("POST",url,true);
		if (contentType != undefined)
			xmlhttp.setRequestHeader("Content-Type", contentType);
		if (auth != undefined)
			xmlhttp.setRequestHeader("Authorization", "Basic " + btoa(auth['username'] + ":" + auth['password']));
		xmlhttp.send(JSON.stringify(body));
	}
}
