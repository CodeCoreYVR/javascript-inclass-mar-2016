var doubleIt = function(number) {
  return number * 2;
}

console.log(doubleIt(5));


var myArray = [1,2,3];

var myFunc = function(x) {
  // var newArray = x.slice(0);
  // newArray.push(4);
  // return newArray;
  x.push(4);
}

myFunc(myArray);

console.log(myArray);

// Exercises
var insult = function(name) {
  alert("The Rock says it doesn't matter what your name is " + name + "!") ;
}

var name = prompt("What is your name?");
insult(name);

var increment = function(num) {
  return num + 1;
}

console.log(increment(9));

var doubleArray = function(array) {
  for(var i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

doubleArray([1,2,3]);
