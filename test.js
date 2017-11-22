
var cookies = document.cookie;
var session = cookies.split(';')[0].split("-").join("").split("=");
var sessionId = session[1];

console.log('session: ', sessionId);


var url = var url = "https://sandbox01.kaxsdc.com/collect/sdk?m=999666&s=" + sessionId;

var script = document.createElement('script');
script.src =  url;
script.type = "text/javascript";

document.head.appendChild(script);
