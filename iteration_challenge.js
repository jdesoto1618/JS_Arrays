//Basic while loop. Runs until a condition becomes false
var a = 0;
while (a < 10) {
  console.log(a)
  a++ //this breaks the while loop. Without some sort of condition, the while loop will be infinite
}

//Can decrement in a while loop as the condition
var b = 10;
while (b > 0) {
  console.log(b);
  b-=1; //This has the same effect on this loop as a prefix decrement. 0 is still being loggeds
}

//Basic for loop. For loop decrements
for (var i = 10; i > 0; i--) {
  console.log(i)
}

// Write a Javascript function mergeArray that merges two arrays and removes all duplicate elements.
function mergeArray(ar1, ar2) {
  var newArr = [];
  var merged = ar1.concat(ar2) //combine the two arrays
  length = merged.length; //get the new length, only once
  for (var i = 0; i < length; i++) {
    if (!newArr.includes(merged[i])) {
        newArr.push(merged[i])
    }
  }
  return newArr;
}
