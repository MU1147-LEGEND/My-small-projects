//Linear Search program start
const linear = [4, 5, 6, 3, 8, 7, 5, 9, 12, 45, 78, 96, 63];
let find = 45;
let length = linear.length;
let result = "invald item";
let invalid = "invald item";
// Compare the first element separately
if (linear[0] === find) {
  console.log("Item found!");
  console.log(`you searched for ${linear[0]}`);
  console.log(`the index of ${linear[0]} is ${linear.indexOf(linear[0])}`);
} else {
  for (i = 1; i < length; i++) {
    if (linear[i] === find) {
      // console.log(`you searched for ${linear[i]}`);
      result = linear[i];
      break;
    }
  }

  if (result !== invalid) {
    console.log("program1:Item found!");
    console.log(`you searched for ${result}`);
    console.log(`the index of ${result} is ${linear.indexOf(result)}\n`);
  } else {
    console.log("Item not found");
    console.log(`you searched for ${result}`);
    console.log(`the index of ${result} is ${linear.indexOf(result)}\n`);
  }
}

//Linear Search program END

//factorial with recursive function start
function factorial(n) {
  if (n === 0) {
    // base case
    return 1;
  } else {
    // recursive case
    return n * factorial(n - 1);
  }
}
console.log(`program2:The factorial of given input is ${factorial(5)}\n`);

//factorial with recursive function END

//Binary Search program start

let binary = [95, 182, 122, 96, 114, 28, 160, 49, 2, 148, 85, 17, 5, 47, 173, 97, 154, 16, 153, 66];
let binarySorted = binary.sort((a, b) => a - b); //[2, 5, 16, 17, 28, 47, 49, 66, 85, 95, 96, 97, 114, 122, 148, 153, 154, 160, 173, 182]
let findInBinary = 153;
let left = 0;
let right = binarySorted.length - 1;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);

  if (binarySorted[mid] === findInBinary) {
    console.log(`program3: The ${binarySorted[mid]} is found on ${mid} index`);
    break;
  } else if (binarySorted[mid] < findInBinary) {
    left = mid + 1;
  } else {
    right = mid - 1;
}
}

//Binary Search program END
