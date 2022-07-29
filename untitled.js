/*
let cost = 300;
let percent = 10;
let sell = cost*(100+percent)/100;
console.log(sell);
*/
function calc(){
let a = document.getElementById("vumi").value;
let b = document.getElementById("lombo").value;
let c = (a*a+b*b);
let d = Math.sqrt(c);
document.getElementById("result").innerHTML ="তুমার অতিভুজ হলোঃ "+d;
}
//------------
function percent(){
let sell = document.getElementById("sell").value;
let cost = document.getElementById("cost").value;
  document.getElementById('percent').innerHTML= (
(sell-cost)/cost*100+"%");
}

function kill(){
  document.getElementById("percent").innerHTML = "Percentage";
}

function killAll(){
  document.getElementById("cost").value = "";
  document.getElementById("sell").value = "";
  document.getElementById("percent").innerHTML = "Percentage";
}

