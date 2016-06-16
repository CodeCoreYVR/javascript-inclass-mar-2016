var deepClone = function(obj) {
  var newObj = {};
  for (var k in obj) {
    if(typeof(k) === "object") {
      newObj[k] = deepClone(obj[k]);
    } else {
      newObj[k] = obj[k];
    }
  }
  return newObj;
}

console.log(deepClone({a: 1, b: 2}));
console.log(deepClone({a: 1, b: {a: 1}}));
