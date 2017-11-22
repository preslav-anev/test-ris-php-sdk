
var cookies = document.cookie;
var session = cookies.split(';')[0].split("-").join("").split("=");
var sessionId = session[1];

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

var cookie = getCookie("cart");

console.log('cookies: ', cookies);
console.log('cookie by name: ', cookie);

var url = "https://sandbox01.kaxsdc.com/collect/sdk?m=999666&s=" + sessionId;

var script = document.createElement('script');
script.src =  url;
script.type = "text/javascript";

document.head.appendChild(script);
