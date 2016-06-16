var Animal = function(type, color){
  this.type = type;
  this.color = color;
}

Animal.prototype.info = function() {
  console.log("Type is: " + this.type + " Color is: " + this.color);
}

var tom = new Animal("Cat", "Brown");
tom.info();
