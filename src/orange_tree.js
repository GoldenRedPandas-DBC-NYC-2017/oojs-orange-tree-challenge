// Orange constructor and prototype code:
var Orange = function() {
  this.diameter = this.calculateDiameter();
}

Orange.prototype.minOrangeDiameter = 2.5;
Orange.prototype.maxOrangeDiameter = 3.2;

Orange.prototype.calculateDiameter = function() {
  return (Math.random() * (this.maxOrangeDiameter - this.minOrangeDiameter)) + this.minOrangeDiameter;
}

// OrangeTree constructor and Prototype code:

// what if the OrangeTree needed to take each argument separately?
// tree = new OrangeTree(1, 2.5, []);
// var OrangeTree = function(age, height, oranges) {
//   this.age = age || 0; 
//   this.height = height || 0;
//   this.oranges = oranges || [] 
// }

// this constructor assumes the call is this:
// tree = new OrangeTree({age: 1, height: 2.5, oranges: []});
var OrangeTree = function(args = {}) { // default value for args
  this.age = args.age || 0; // default values for each property
  this.height = args.height || 0;
  this.oranges = args.oranges || []; // default empty array for container property
};

// these are constants that all OrangeTree objects share
OrangeTree.prototype.rateOfGrowth = 2.5;
OrangeTree.prototype.ageOfDeath = 100;
OrangeTree.prototype.ageOfMaturity = 6;

// these are methods/behaviors that all OrangeTree objects share
OrangeTree.prototype.isMature = function() {
  return (this.age >= this.ageOfMaturity && !this.isDead());
};

OrangeTree.prototype.isDead = function () {
  return this.age >= this.ageOfDeath;
};

OrangeTree.prototype.hasOranges = function() {
  return this.oranges.length > 0;
};

OrangeTree.prototype.passGrowingSeason = function() {
  this.clearOranges();
  this.incrementAge();
  this.incrementHeight();
  if (this.isMature() && !this.isDead()) {
    this.growOranges();
  }
};

OrangeTree.prototype.clearOranges = function() {
  this.oranges = [];
};

OrangeTree.prototype.incrementHeight = function() {
  this.height += this.rateOfGrowth;
};

OrangeTree.prototype.incrementAge = function () {
  this.age += 1;
};

OrangeTree.prototype.growOranges = function () {
  var times = Math.random() * (300 - 100) + 100;  
  for(var i=0; i < times; i++) {
    var orange = new Orange();
    this.oranges.push(orange);
  }
};

// runner code:
var tree = new OrangeTree();
for (var i = 0; i < 102; i++) {
  tree.passGrowingSeason();
  console.log("age of tree:");
  console.log(tree.age);
  console.log("is the tree mature?");
  console.log(tree.isMature());
  console.log("how many oranges are in this tree?");
  console.log(tree.oranges.length);
  console.log("****************************")
  console.log("****************************")
  console.log("****************************")
  console.log("****************************")
}

