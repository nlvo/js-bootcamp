'strict mode';

function Clown(name, shoeSize, laughingStyle) {
    this.name = name,
    this.shoeSize = shoeSize,
    this.laughingStyle = laughingStyle
}

Clown.prototype.laugh = function() {
    // return 'hi, ik ben' + this.name + ' ik heb schoenmaat ' + this.shoeSize + ' ' + this.laughingStyle;
    return `hi, ik ben ${this.name} ik heb schoenmaat ${this.shoeSize} ${this.laughingStyle}`;
}

var clown = new Clown('Pony', 12, 'Muahahah');

console.log(clown.laugh());