Function.prototype.inherits = function(parentClass) {
  const Surr = function Surrogate(){};

  Surr.prototype = parentClass.prototype;
  this.prototype = new Surr();
  this.prototype.constructor = this;
};

Function.prototype.inherits = function (parentClass) {
  this.prototype = Object.create(parentClass.prototype);
  this.prototype.constructor = this;
};









function MovingObject(x, y) {
  this.x = x;
  this.y = y;
}
MovingObject.prototype.stop = function() {
  console.log("I've stopped.");
};

function Ship(...args) {
  MovingObject.apply(this, args);
}
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);
