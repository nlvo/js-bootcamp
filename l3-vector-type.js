class Vec {
	// gets value of vector
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // gets sum of two vectors
    plus(x, y) {
        var result = this;
        this.x = this.x + this.y;
        this.y = x.x + x.y;
        return result;
    }
    // gets difference of two vectors
    minus(x, y) {
        var result = this;
        this.x = this.x - this.y;
        this.y = x.x - x.y;
        return result;
    }
    // gets length of vector
    get length() {
    	return Math.sqrt((this.x * this.x + this.y * this.y));
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5