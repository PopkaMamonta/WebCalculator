//function addNum(){
//    document.getElementsByClassName("input").value=document.getElementsByClassName("input").value+document.getElementById("number");
//}
//
function blinker() {
    $('.blink-me').fadeOut(200);
    $('.blink-me').fadeIn(200);
}
setInterval(blinker, 500);
