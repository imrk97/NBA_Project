var database = firebase.database().ref().child('Menu');
database.once('value', function(snapshot){
    if(snapshot.exists()){
        var content = '';

        snapshot.forEach(function(data){
            var ordername = data.val().OrderName;
            //var food= data.val().FoodPrice;
            var foodorder= data.val().FoodOrder;
                console.log()
            content += '<tr>';
            content += '<td>' + ordername + '</td>'; //column1
            content += '<td>' + foodorder + '</td>';//column2
            content += '</tr>';
        });

        $('#ordertable').append(content);
    }
});