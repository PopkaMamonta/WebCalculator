//function addNum(){
//    document.getElementsByClassName("input").value=document.getElementsByClassName("input").value+document.getElementById("number");
//}
//
//function blinker() {
//    $('.blink-me').fadeOut(200);
//    $('.blink-me').fadeIn(200);
//}
//setInterval(blinker, 500);


const input=document.getElementById('input');
const numbers=document.querySelectorAll(".calc-button-row div");
const result=document.getElementById('result');



for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function(e) {
      if (e.target.innerHTML==="="){
        input.innerHTML=(eval(input.innerText));
      }else if(e.target.innerHTML==="C"){
          input.innerHTML = "";
      }else if(input.innerText==="0"){
          if(e.target.innerHTML==="0"){
             input.innerHTML = "0";
          }else{
              input.innerHTML+=e.target.innerHTML;
          }
      }else if(e.target.innerHTML==="%"){
          if(input.innerHTML ===""){
              input.innerHTML = "";
          }else{
             input.innerHTML = input.innerText/100;  
          }
      }else if(e.target.innerHTML==="B"){
          input.innerHTML =input.innerText.substring(0, input.innerText.length - 1);
      }else{
        input.innerHTML+=e.target.innerHTML;
      }
  });
}