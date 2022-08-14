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
  document.getElementById('percent').innerHTML = ("এই পণ্যে তোমার লাভ/ক্ষতি হচ্ছেঃ " +
    limitProfit + "%");
}

function isPrime() {
  let val = document.getElementById("primeValue").value;
  let num = Number(val);
  if (num === 1) {
    document.getElementById("prime").innerHTML = `${num} is not a Prime Number`;
  }
  else if (num % 2 === 0) {
    document.getElementById("prime").innerHTML = `${num} is not a Prime Number`;
  }
  else if (num % 3 === 0) {
    document.getElementById("prime").innerHTML = `${num} is not a Prime Number`;
  }
  else if (num % 5 === 0) {
    document.getElementById("prime").innerHTML = `${num} is not a Prime Number`;
  }
  else if (num % 7 === 0) {
    document.getElementById("prime").innerHTML = `${num} is not a Prime Number`;
  }
  else if (num % 9 === 0) {
    document.getElementById("prime").innerHTML = `${num} is not a Prime Number`;
  }
  else if (num % 11 === 0) {
    document.getElementById("prime").innerHTML = `${num} is not a Prime Number`;
  }
  else if (num % 13 === 0) {
    document.getElementById("prime").innerHTML = `${num} is not a Prime Number`;
  }
  else if (num % 19 === 0) {
    document.getElementById("prime").innerHTML = `${num} is not a Prime Number`;
  }
  else if (num % 23 === 0) {
    document.getElementById("prime").innerHTML = `${num} is not a Prime Number`;
  }
  else if (num % 31 === 0) {
    document.getElementById("prime").innerHTML = `${num} is not a Prime Number`;
  }
  else {
    document.getElementById("prime").innerHTML = `${num} is a Prime Number`;
  }
}

function factorial() {
  let countFact = 1;
  let factNum = document.getElementById("fact").value;
  for (let i = 1; i <= factNum; i++) {
    countFact *= i;
  }
  document.getElementById("factShow").innerHTML = `Factorial of ${factNum} is: ${countFact}`;
}

//clear All Function---
function killAll() {
  document.getElementById("cost").value = "";
  document.getElementById("sell").value = "";
  document.getElementById("vumi").value = "";
  document.getElementById("lombo").value = "";
  document.getElementById("primeValue").value = "";
  document.getElementById("otivuj").innerHTML = "অতিভুজ";
  document.getElementById("prime").innerHTML = "Is Prime or Not";
  document.getElementById("factShow").innerHTML = "Factorial value:";
  document.getElementById("percent").innerHTML = "লাভ/ক্ষতির হার";
}

//turning off inspect element
document.addEventListener('contextmenu', function (e) {
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