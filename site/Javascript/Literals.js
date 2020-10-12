//Object literal
var literalCircle = { //equivalent to = new Object()
	radius: 10,

	getArea: function () {
		var self = this;
		console.log(this);

		var increasedRadius = function() {
			self.radius = 20;
		};
		increasedRadius();
		console.log(this.radius);

		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCircle.getArea());