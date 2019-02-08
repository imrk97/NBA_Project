document.getElementById('deletefoodform').addEventListener('submit', deleteForm);

function deleteForm(e) {
    e.preventDefault();

    var database1 = firebase.database().ref('Menu');
    var database2 = firebase.database().ref('order');

    database1.remove();
    database2.remove();
    alert("Menu Cleared");
    location.reload();
}