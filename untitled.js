/*
let cost = 300;
let percent = 10;
let sell = cost*(100+percent)/100;
console.log(sell);
*/
function calc() {
  let a = document.getElementById("vumi").value;
  let b = document.getElementById("lombo").value;
  let c = (a * a + b * b);
  let d = Math.sqrt(c);
  let limitOti = d.toFixed(3);
  document.getElementById("otivuj").innerHTML = "তুমার অতিভুজ হলোঃ " + limitOti;
}
//------------
function percent() {
  let sell = document.getElementById("sell").value;
  let cost = document.getElementById("cost").value;
  let profit = (sell - cost) / cost * 100;
  let limitProfit = profit.toFixed(3);
  document.getElementById('percent').innerHTML = ("এই পণ্যে তোমার লাভ/ক্ষতি হচ্ছেঃ "+
    limitProfit + "%");
}

function killAll() {
  document.getElementById("cost").value = "";
  document.getElementById("sell").value = "";
  document.getElementById("vumi").value = "";
  document.getElementById("lombo").value = "";
  document.getElementById("otivuj").innerHTML = "অতিভুজ";
  document.getElementById("percent").innerHTML = "লাভ/ক্ষতির হার";
}


document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
document.onkeydown = function (e) {
  if (e.keyCode === 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};