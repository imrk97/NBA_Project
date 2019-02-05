//var firebase = require("firebase");
function fun() {
     var firebase = require('firebase');
    var config = {
        apiKey: "AIzaSyD4Aq8pjCISVuQYei0t1fPBV2_BpWq3SNo",
        authDomain: "nbacanteen.firebaseapp.com",
        databaseURL: "https://nbacanteen.firebaseio.com",
        projectId: "nbacanteen",
        storageBucket: "nbacanteen.appspot.com",
        messagingSenderId: "719056664091"
    };
    firebase.initializeApp(config);
    var cust_name = document.getElementById("name").value.trim();
    var cust_email = document.getElementById("email").value.trim();
    var cust_feedback = document.getElementById("feedback").value.trim();
    var database = firebase.database();
    var cust_date = new Date();
    var ref = database.ref('Feedback');

    var data = {
        name: cust_name,
        email: cust_email,
        issue: cust_feedback,
        date: cust_date
    }

    ref.push(data);
    console.log('inside fun()');
    return true;
}

