document.getElementById('regFormID').addEventListener('submit', regForm);

function regForm(e) {
    e.preventDefault();

    console.log('after prevent default');

    var roll_temp = document.getElementById('rollno').value.trim();
    //var food_desc = document.getElementById("desc").value.trim();
    //var food_price = document.getElementById("price").value.trim();

    var database = firebase.database();
    var ref = database.ref('Register');
    var temp_date = new Date();


    var temp_pass = "R" + roll_temp + temp_date.getMilliseconds();


    var data = {
        Pass: temp_pass,
        Roll: roll_temp
    }
    ref.push(data);
    //console.log(ref.push(data));
    console.log(data);

    
    $('#passwordshow').append('Password is: ' + temp_pass);
    alert("Password in dispalyed under the Form, Please Reload This Page before Registering a New User!");
    //location.reload();
}