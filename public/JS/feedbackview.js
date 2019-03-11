var database1 = firebase.database().ref().child('Feedback');
database1.once('value', function (snapshot) {
    if (snapshot.exists()) {
        var content = '';

        snapshot.forEach(function (data) {
            var cust_name = data.val().name;
            var roll = data.val().rollno;
            var cust_feedback=data.val().issue;
            var cust_date=data.val().date;
            var cust_email=data.val().email;
            content += '<tr>';
            content += '<td>' + cust_name + '</td>'; //column1
            content += '<td>' + roll + '</td>';//column2
            content += '<td>' + cust_email + '</td>';
            content += '<td>' + cust_feedback + '</td>';
            content += '<td>' + cust_date + '</td>';
            content += '</tr>';
        });

        $('#feedbacktable').append(content);
    }
});
