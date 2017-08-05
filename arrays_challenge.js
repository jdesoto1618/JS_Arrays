//Function that finds the highest number.
function highestNumber(array) {
  var sorted = array.sort(function(a,b) {
   return a-b //loops through array and places a before b
  })
  var length = sorted.length;
  console.log(sorted[length-1]) //Grab the last number after sorting
}

//Function that finds the lowest number.
function lowestNumber(array) {
  var sorted = array.sort(function(a,b) {
   return b-a //loops through array and puts b before a
  })
  var length = sorted.length
  console.log(sorted[length-1])
}

//Function that finds the smallest number (the closest to zero).
// var a2 = []
// function smallestNumber(array) {
//     array.forEach(function(el) {
//       a2.push(Math.abs(el)) //make all numbers positive first
//     	a2.sort() //sort this array so the smallest one is where it's expected
//     })
//     console.log(a2);
//     return a2[0]
// }
// smallestNumber([4,5,0]);

//Function that calculate the sum.
function sum(array) {
  var total = 0;
  length = array.length; //find the length first so the program only does this step once
  for (var i = 0; i <= length-1; i++) {
    total += array[i] //take total's value and add on to it the next one in the passed in array
  }
  return total
}

//Function that calculate the mean value.
function mean(array) {
  var total = 0;
  var length = array.length; //Program does this step only once
  for (var i = 0; i <= length-1; i++) {
    total += array[i] //Determine the sum of the passed in array. Will use this to find the mean.
  }
  return total/(length) //Find the mean in this step
}

//Function that finds the index of the highest number.
function indexHighest(array) {
  var sorted = array.sort(function(a,b) {
   return a-b //loops through array and places a before b
  })
  //Now that the array is sorted, grab the index of the highest number
  var length = sorted.length;
  console.log(sorted.indexOf(sorted[length-1]));
}

//Array of Strings
var parentsNames = ["Joe", "Cindy", "Roland", "Sheila"];
var siblingsNames = ["Marika", "Sibling2", "Fred"];

var sibSort = siblingsNames.sort(); //alphabetical order

var parentSort = parentsNames.sort().reverse(); //reverse alphabetical order

var combined = parentsNames.concat(siblingsNames); //combine arrays

combined.sort(); //alphebetize

combined.sort().reverse(); //reverse alphabetize

//Given the above concatenated array, create a function that determines if a user inputted name is part of the concatenated array
var enteredName = prompt("What name are you looking for?");
function isMember(name) {
  return name === enteredName; //returns true or false, based on what the user enters. This will compare the users name entry to the concatenated array and return true or false. That will be utilized in the subsequent if statement
}
if (combined.some(isMember)) {
    console.log (enteredName + " is in the list!");
} else {
  console.log (enteredName + " is NOT in the list.");
}

//Advanced Functions//

//Create a function that returns an array with only the even elements from the array.
function getEvens(array) {
  var evenArray = [];
  array.forEach(function(a) {
    if(a%2 === 0) {
      evenArray.push(a)
    }
  })
    if (evenArray.length === 0) {
      console.log("This array had no even numbers.")
    } else {
    return evenArray
  }
}


//Create a function that returns an array with the elements at even indices.
function evenIndices(arr) {
	evens = [];
	length = arr.length;
	for (var i = 0; i < length; i +=2) {
		evens.push(arr[i]);
    }
	return evens;
}

//Create a function that returns an array with only the odd elements from the array, not the odd indices!
function getOdds(array) {
  var oddsArray = [];
  array.forEach(function(a) {
    if(a%2 === 1) {
      oddsArray.push(a)
    }
  })
    if (oddsArray.length === 0) {
      console.log("This array had no odd numbers.")
    } else {
    return oddsArray
  }
}


//Create a function that returns an array with the elements at odd indices.
function oddIndices(arr) {
	odds = [];
	length = arr.length;
	for (var i = 1; i < length; i +=2) {
		odds.push(arr[i]);
    }
	return odds;
}

//Create a function that takes an array and a function, and returns a new array with the return value of the function on each of the elements of the array.

var newArray = []
function mapArray(array, fun) {
  array.forEach(function(element){
     newArray.push(fun(element))
  })
return newArray
}

// Create a function that take an array and a function, and returns a new array with only the elements for which the function returns true.
var filtArr = []
function filterArray(array, func) {
  array.forEach(function(elems){
    if (func(elems) === true) {
      filtArr.push(elems)
    }
  })
  return filtArr
}
