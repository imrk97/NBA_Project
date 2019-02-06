function feedbackValidation() {
    var cust_name=document.getElementById("name").value.trim();
    var cust_email=document.getElementById("email").value.trim();
    var cust_feedback=document.getElementById("feedback").value.trim();
}

function adminValidation() {
    const def_username = "nbacanteen@";
    const def_password = "nbacanteen@";
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