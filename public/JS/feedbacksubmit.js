document.getElementById('feedbackForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    console.log('after prevent default');

    var cust_name = document.getElementById("name").value.trim();
    var cust_email = document.getElementById("email").value.trim();
    var cust_feedback = document.getElementById("feedback").value.trim();
    var temp_date = new Date();
    var cust_date = temp_date.toString();
    var database = firebase.database();
    var ref = database.ref('Feedback');

    var data = {
        name: cust_name,
        email: cust_email,
        issue: cust_feedback,
        date: cust_date
    }

    ref.push(data);
    console.log('inside fun..');
    alert(cust_name+ ", your feedback has been sent to us..Thank you..");
}