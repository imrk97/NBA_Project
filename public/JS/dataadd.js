document.getElementById('addfoodForm').addEventListener('submit', addForm);

function addForm(e) {
    e.preventDefault();

    console.log('after prevent default');

    var food_name = document.getElementById("itemname").value.trim();
    var food_desc = document.getElementById("desc").value.trim();
    var food_price = document.getElementById("price").value.trim();

    var database = firebase.database();
    var ref = database.ref('Menu');
    //var ref_order = database.ref('order/item');

    var data = {
        FoodName: food_name,
        FoodDesc: food_desc,
        FoodPrice: food_price,
        OrderName: food_name + ' ( ' + food_desc + ' )' + '    ₹ ' + food_price ,
        FoodOrder: '0'
    }
    ref.push(data);

    //ref_order.child(food_name + ' ( ' + food_price + ' ) ').set('0');
    alert(food_name + "  Added");
    location.reload();

}

// ref.child("Item").set("dfdfd");