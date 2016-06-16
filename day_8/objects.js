var me = {name: "Critian", age: 33, occupation: "Student"};

me.occupation = "Javascript Expert";

me.skills = ["Ruby", "Rails", "Javascript"];


var charCount = function(string) {
  var charNum = {};
  for (var i = 0; i < string.length; i++) {
    // If the charNum doesn't have that character, it means that we haven't
    // encountered the character before so we start at 1.
    if(!charNum[string[i]]) {
      charNum[string[i]] = 1;
    } else {
      charNum[string[i]] += 1;
    }
  }
  return charNum;
}

console.log(charCount("hello"));
console.log(charCount("hello world"));
console.log(charCount(prompt("give me a sentence")));

var userDetails = function(user) {
  console.log(user.name + " is " + user.age + " years old");
}

userDetails({name: "Don", age: "33"});

var wordLengths = function(sentence) {
  var words = sentence.split(" ");
  var obj   = {};
  for (var i = 0; i < words.length; i++) {
    obj[words[i]] = words[i].length;
  }
  return obj;
}

wordLengths("Hello world");


var listProps = function(obj) {
  for (var key in obj) {
    console.log("Key " + key + " value " + obj[key]);
  }
}
listProps(console);

var clone = function(obj) {
  return Object.create(obj);
}

var clone = function(obj) {
  var newObject = {};
  for (var key in obj) {
    newObject[key] = obj[key];
  }
  return newObject;
}

console.log(clone({a: 1, b: 2}));


var deepClone = function(obj) {
  var newObject = {};
  for (var key in obj) {
    if(typeof(obj[key]) === "object") {
      newObject[key] = clone(obj[key]);
    } else {
      newObject[key] = obj[key];
    }
  }
  return newObject;
}

console.log(clone({a: 1, b: {c: 3, d: 4}}));
