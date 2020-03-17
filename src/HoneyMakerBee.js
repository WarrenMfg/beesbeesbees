var HoneyMakerBee = function(job='make honey', age=10, color, food) {
  Bee.call(this, job, age, color, food);
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.makeHoney = function() { this.honeyPot++; };
HoneyMakerBee.prototype.giveHoney = function() { this.honeyPot--; };
