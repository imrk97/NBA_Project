// var ref = firebase.database().ref().child("Menu");
// ref.on("child_added",snap=>{
//     var foodname =snap.child("FoodName").value();
//     var foodprice = snap.child("FoodDesc").value();

//     console.log(foodname+foodprice);

//     $("#ordertablebody").append("<tr><td>"+foodname+"</td><td>"+foodprice+"</td></tr>");
// });


// var ref = firebase.database().ref('Menu').child('FoodDesc');

// ref.on("value", function(snapshot) {
//    console.log(snapshot.val());
// }, function (error) {
//    console.log("Error: " + error.code);
// });


var database = firebase.database().ref().child('Menu');
database.once('value', function(snapshot){
    if(snapshot.exists()){
        var content = '';

        snapshot.forEach(function(data){
            var foodname = data.val().FoodName;
            var fooddesc= data.val().FoodDesc;
            var foodprice= data.val().FoodPrice;

            content += '<tr>';
            content += '<td>' + foodname + '</td>'; //column1
            content += '<td>' + fooddesc + '</td>'; //column2
            content += '<td>' + foodprice + '</td>';//column3
            content += '</tr>';
        });

        $('#ordertable').append(content);
    }
});