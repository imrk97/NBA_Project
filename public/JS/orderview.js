var database1 = firebase.database().ref().child('Menu');
database1.once('value', function(snapshot){
    if(snapshot.exists()){
        var content = '';

        snapshot.forEach(function(data){
            var ordername = data.val().OrderName;
            var orderno= data.val().FoodOrder;
            content += '<tr>';
            content += '<td>' + ordername + '</td>'; //column1
            content += '<td>' + orderno + '</td>';//column2
            content += '</tr>';
        });

        $('#ordertable').append(content);
    }
});
