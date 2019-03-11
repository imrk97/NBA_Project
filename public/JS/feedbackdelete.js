document.getElementById('deletefeedbackform').addEventListener('submit', deleteForm);

function deleteForm(e) {
    e.preventDefault();

    var database1 = firebase.database().ref('Feedback');
    //var database2 = firebase.database().ref('order');

    database1.remove();
   // database2.remove();
    alert("Feedbacks are Cleared");
    location.reload();
}