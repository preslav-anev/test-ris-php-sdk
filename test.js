function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var sessionId = getCookie("cart");
console.log('cookie by name: ', sessionId);
if(sessionId) {
    setCookie("KountCookie", sessionId, 365);
    var url = "https://sandbox01.kaxsdc.com/collect/sdk?m=999666&s=" + sessionId;
    var script = document.createElement('script');
    script.src =  url;
    script.type = "text/javascript";
    document.head.appendChild(script);
    console.log('script is attached');
}

