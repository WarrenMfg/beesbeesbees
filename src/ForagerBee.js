var ForagerBee = function(canFly=true, job='find pollen', age=10, color, food) {
  Bee.call(this, job, age, color, food);
  this.canFly = canFly;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.forage = function(treasure) { this.treasureChest.push(treasure); };