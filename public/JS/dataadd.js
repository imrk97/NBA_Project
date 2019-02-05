document.getElementById('addfoodForm').addEventListener('submit', addForm);

function addForm(e) {
    e.preventDefault();

    console.log('after prevent default');

    var food_name = document.getElementById("itemname").value.trim();
    var food_desc = document.getElementById("desc").value.trim();
    var food_price = document.getElementById("price").value.trim();
    
    var database = firebase.database();
    var ref = database.ref('Menu');

    var data = {
         FoodName: food_name,
         FoodDesc: food_desc,
         FoodPrice: food_price
    }

    ref.push(data);
    alert(food_name+ "  Added");
    console.log('inside fun..');
}