var first = ["Hello", 5, 'a'];

first[1] = 6;

console.log(first);

var second = [];

for (var i = 0; i <= 100; i++) {
  second.push(i);
}

console.log(second.length);
console.log(second);

for (var i = 0; i < second.length; i++) {
  console.log("Number: " + i);
}

var array = [0, 5, 6, -12];

var results = 0;

for(var i = 0; i < array.length; i++) {
  // results = results + array[i];
  results += array[i];
}


console.log(results);

var words = ["apple", "dog", "computer", "cup"];

for (var i = 0; i < words.length; i++) {
  console.log("[" + words[i] + "] has " + words[i].length + " characters");
}
