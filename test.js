document.getElementById("idk").innerHTML="hello";
function sayHello(){
    document.getElementById("final").innerHTML="HELLO";
}
function abra(){
    var msg = document.getElementById("content").innerHTML;
    msg+= " abra";
    document.getElementById("content").innerHTML = msg;
}
function kadabra(){
    var msg = document.getElementById("content").innerHTML;
    msg+= " kadabra";
    document.getElementById("content").innerHTML = msg;
}
// if they click the button then say hello