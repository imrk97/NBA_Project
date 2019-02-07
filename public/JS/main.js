document.getElementById('loginform').addEventListener('submit', adminValidation);

function adminValidation(e) {
    e.preventDefault();
    var def_password;
    var def_username;
    // const def_username = "nbacanteen@";
    // const def_password = "nbacanteen@";
    //Values extracted from frontend
    var username = document.getElementById("user");
    var password = document.getElementById("pass");

    var ref = firebase.database().ref('user');
    ref.on('value', function(snapshot){
        var user=snapshot.val();
        var key=Object.keys(user);
        console.log(key);
        var i=key[0];
        def_password=user[i].password;
        def_username=user[i].username;
       // console.log(username+password);
        console.log(def_password+def_username);
    });
    //password verification
    if (username == def_username && password == def_password) {
        location.replace("mainpage.html");
    }
    else {
        alert("Username & password mismatch");
        location.reload();
    }
}

// var ref = firebase.database().ref();

// ref.on("value", function(snapshot) {
//    console.log(snapshot.val());
// }, function (error) {
//    console.log("Error: " + error.code);
// });