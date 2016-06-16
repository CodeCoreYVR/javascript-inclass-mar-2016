var ChuckNorris = function() {
  this.lastFact  = "";
  this.fetchFact = function() {
    $.get("https://advanced-js.herokuapp.com/chuck_norris", fetchFactCallback);
  };

  var fetchFactCallback = function(result) {
   this.lastFact = result.fact;
   console.log(result.fact);
  }.bind(this);
};

var chuck = new ChuckNorris();
chuck.fetchFact();
chuck.lastFact;
