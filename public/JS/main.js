document.getElementById('loginform').addEventListener('submit', adminValidation);

function adminValidation(e) {
    e.preventDefault();

    console.log('after prevent default');

    var usernametemp = document.getElementById("user_temp").value.trim();
    var passwordtemp = document.getElementById("pass_temp").value.trim();

    var ref = firebase.database().ref('user');

    ref.on('value', function (snapshot) {
        var user = snapshot.val();
        var key = Object.keys(user);
        var i = key[0];
        var def_password = user[i].password;
        var def_username = user[i].username;
        console.log(usernametemp + passwordtemp);
        console.log("form value taken");
        console.log(def_password + def_username);
        console.log("database value taken");
        if (usernametemp == def_username && passwordtemp == def_password) {
            sessionStorage.setItem("cheak_flag", "1");
            location.replace("mainpage.html");
        }
        else {
            alert("Username & password mismatch");
            location.reload();
        }
    });
    //password verification
}