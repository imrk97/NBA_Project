document.getElementById('feedbackForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    console.log('after prevent default');
    let roll=document.getElementById("clgroll").value.trim();
    //var cust_name = document.getElementById("name").value.trim();
    //var cust_email = document.getElementById("email").value.trim();
    var cust_feedback = document.getElementById("feedback").value.trim();
    var temp_date = new Date();
    var temp_month=temp_date.getMonth() +1;
    var cust_date = temp_date.getDate()+'/'+temp_month +'/'+temp_date.getFullYear();
    var database = firebase.database();
    var ref = database.ref('Feedback');

    var data = {
        
        rollno: roll,
        
        issue: cust_feedback,
        date: cust_date
    }

    ref.push(data);

    alert(cust_name + ", your feedback has been sent to us..Thank you..");
}