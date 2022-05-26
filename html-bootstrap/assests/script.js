
var ie = document.getElementById('inputEmail');
var ip = document.getElementById('inputPassword');
var sub = document.getElementById('sub');

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = ie + "=" + ip + ";" + expires + ";path=/";
    movePage();
}

var sub = document.getElementById('sub');
if(sub){
  sub.addEventListener('click', setCookie);
}
function movePage(){
    window.location = 'index.html';
}

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
  
function returnHome(){
    window.location = 'cookieAuth.html'
}

var x = document.querySelector('.x');

function checkCookie()
{ 
    var t = getCookie("authenticated");
    if(t != "true"){
        returnHome();
        alert("Cannot authenticate at this time.");
    }
    else
    {
        x.innerHTML = 'Welcome back... content follows';
    }
}
