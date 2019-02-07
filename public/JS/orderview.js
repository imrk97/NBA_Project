var database = firebase.database().ref().child('Menu/item');
database.once('value', function(snapshot){
    if(snapshot.exists()){
        var content = '';

        snapshot.forEach(function(data){
            var foodname = data.val().FoodName;
            var foodprice= data.val().FoodPrice;
            var foodorder= data.val().Order;

            content += '<tr>';
            content += '<td>' + foodname + '</td>'; //column1
            content += '<td>' + foodprice + '</td>'; //column2
            content += '<td>' + foodorder + '</td>';//column3
            content += '</tr>';
        });

        $('#ordertable').append(content);
    }
});