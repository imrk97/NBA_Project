function feedbackValidation() { }
function adminValidation() {
    const def_username = "admin";
    const def_password = "admin";
    //Values extracted from frontend
    var username = document.getElementById("user").value.trim();
    //var username = document.getElementById("user");
    var password = document.getElementById("pass").value.trim();

    //password verification
    if (username == def_username && password == def_password) {
        return true;
    }
    else {
        alert("Username & password mismatch");
        return false;
    }
}



/*function createCookie(name, value, days) {
  var expires = "";
   if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function preventBack(){window.history.forward();}
    setTimeout("preventBack()", 0);
    window.onunload=function(){null};*/