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
    var that = this;
    var details = function() {
      console.log(">>>>>>>>>>>>");
      console.log(this);
      console.log(that);
      console.log(">>>>>>>>>>>>");
      console.log("This cookie has " + that.sugar + "g of sugar");
      console.log("This cookie has " + that.flour + "g of flour");
    }
    details();
    return this.sugar * 3.8 + this.flour * 3.5;
  }
}

var c  = new Cookie(10, 15); // {sugar: 10, flour: 15}
var c1 = new Cookie(12, 16); // {sugar: 12, flour: 16}
