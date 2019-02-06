document.getElementById('deletefoodform').addEventListener('submit', deleteForm);

function deleteForm(e) {
    e.preventDefault();
    
    var database = firebase.database().ref('Menu');

    database.remove();
    alert("Menu Cleared");
}