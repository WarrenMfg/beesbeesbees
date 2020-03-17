var RetiredForagerBee = function(canFly=false, job='gamble', age=40, color='grey', food) {
  ForagerBee.call(this, canFly, job, age, color, food);
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() { return 'I am too old, let me play cards instead' };
RetiredForagerBee.prototype.gamble = function(treasure) { this.treasureChest.push(treasure); };