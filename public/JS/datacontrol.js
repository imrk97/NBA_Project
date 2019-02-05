function fun(){
    var ref=firebase.database().ref("hello").child("Bppimt");
    ref.set("Helo");
    alert("js working")
}

