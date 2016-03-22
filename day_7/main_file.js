// you define a variable in Javascript using `var`
// var name = "Tam";

// var name = prompt("What is your name?");
// alert("Hello" + name);

var name = "Tam";
console.log("Hello " + name);

var firstName = "Todd";
var lastName  = "Cardoso";
var age       = 34;

var all       = firstName + " " + lastName + " age " + age;

console.log(all);
console.log(all.length);

var firstName = "Critian",
    lastName  = "Guerrero",
    fullName  = firstName + " " + lastName;

console.log(fullName);

var name = "Bob", a = 3, b = 4, result = a * b;

var all = "Hello, " + name + " in case you forgot, " + a + " X " +
          b + " is " + result;

console.log(all);
document.write(all);

var message = "Hello World";
document.write(message);
console.log(message);
alert(message);

var name = prompt("What is your name?");
var message = "Hello, " + name + "!";
alert(message);


var password = prompt("GIVE ME YOUR PASSWORD!");
​
if (password.length > 12){
  alert("Your Password is too long!");
} else if (password.length < 8) {
    alert("Your password is too short!");
} else {
    alert("Just right!");
}



var x = 100;

while(x > 0) {
  console.log(x);
  x--;
}

var num = 0;

while (num <= 100) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

for (var i = 0; i < 10; i++) {
  console.log(i);
}


// number will be a Javascript Number. guess will a string from the user
var number = Math.floor(Math.random() * 100 + 1);
var guess  = parseInt(prompt("Make a guess between 1 and 100"));
console.log(number);

while(number !== guess) {
  if (guess > number) {
    alert("Number is too large");
  } else if (guess < number) {
    alert("Number is too small");
  }
  guess = parseInt(prompt("Make a guess between 1 and 100"));
}

alert("Congratulations! you guessed the correct number " + number);
