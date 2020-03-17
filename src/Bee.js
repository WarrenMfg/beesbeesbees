var Bee = function(job='keep on growing', age=5, color='yellow', food) {
  Grub.call(this, age, color, food);
  this.job = job;
};

Bee.prototype = Object.create(Grub.prototype); // overriding new __proto__ that gets set to Bee.prototype
Bee.prototype.constructor = Bee; // undoes what call does

