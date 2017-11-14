
console.log("hello there");

var url = "https://sandbox01.kaxsdc.com/collect/sdk?m=999666&s=hq35565mtf95bfoecl0s67ek154o8q2d";
var script = document.createElement('script');

script.src =  url;
script.type = "text/javascript";

var shop = Shopify;

console.log('shop: ', shop);

document.head.appendChild(script);

var cookies = document.cookie;

console.log('cookies: ' + cookies);

var session = cookies.split(';')[0].split("-").join("").split("=");

var sessionId = session[1];
console.log('session: ', sessionId);
