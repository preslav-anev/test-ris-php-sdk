var sessionId = getCookie("cart");
console.log('cookie by name: ', sessionId);
if(sessionId) {
    var url = "https://sandbox01.kaxsdc.com/collect/sdk?m=999666&s=" + sessionId;
    var script = document.createElement('script');
    script.src =  url;
    script.type = "text/javascript";
    document.head.appendChild(script);
    console.log('script is attached');
}

