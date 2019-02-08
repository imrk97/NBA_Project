var database = firebase.database().ref().child('Menu');
database.once('value', function (snapshot) {
    if (snapshot.exists()) {
        var content = '';

        snapshot.forEach(function (data) {
            var foodname = data.val().FoodName;
            var fooddesc = data.val().FoodDesc;
            var foodprice = data.val().FoodPrice;

            content += '<tr>';
            content += '<td>' + foodname + '</td>'; //column1
            content += '<td>' + fooddesc + '</td>'; //column2
            content += '<td>' + foodprice + '</td>';//column3
            content += '</tr>';
        });

        $('#ordertable').append(content);
    }
});