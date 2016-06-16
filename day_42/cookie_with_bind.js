// var cookie = {
//   sugar: 10,
//   flour: 15,
//   calories: function(){
//     return this.sugar * 3.8 + this.flour * 3.5;
//   }
// }


var Cookie = function(sugar, flour) {
  // this references the object about to get created
  this.sugar = sugar;
  this.flour = flour;

  this.calories = function() {
    var details = function(unit) {
      console.log(">>>>>>>");
      console.log(this);
      console.log(">>>>>>>");
      console.log("This cookie has " + this.sugar + unit + " of sugar");
      console.log("This cookie has " + this.flour + unit + " of flour");
    }.bind(this); // `this` inside the function will be the same as `this` outdside it
    details("g");
    return this.sugar * 3.8 + this.flour * 3.5;
  }
}

var c  = new Cookie(10, 15); // {sugar: 10, flour: 15}
var c1 = new Cookie(12, 16); // {sugar: 12, flour: 16}
