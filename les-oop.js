var person = {
	name: 'Pieter',
	age: 21,
	hobbies: ['coderen', 'gamen']
	// hobbies: {'coderen', 'gamen'} je kunt ook objects nesten
};

console.log(person.hobbies[0]);

var person2 = ['Pieter', 21];
person2[0];
console.log(person2[0]);

var string = 'bootcamp';

console.log(string.length);
// string is een datatype

// ----------

console.log(number);
var number = 6;

// je krijgt, undefined betekend dat de var al bestaat, maar weet niet welke waarde/value het is

var number; //ziet de var maar geen waarde, zo ziet js de code op regel 22
console.log(number);
number = 6;

// functies en var worden gehoised zonder waarde

square(12);

function square(number){

}

// als je meerder files hebt, kun je ervoor kiezen om alle functies in een file te doen

// -------------

function Person(){
	this.name = 'Pieter',
	this.age = 22
}

var pieter = new Person();

console.log(pieter);

// dit is een constructor

// ipv een object in een object te nesten, kun je een functie maken die een object aanmaakt

function Person(name, age, text){
	this.name = name,
	this.age = age,
	// this.text = text,
	this.speak = function (){
		// dit is een methode
		console.log(this.text);
	}
}

var pieter = new Person('Danny', 65, 'hi');
var pietje = new Person('Pietje', 23, 'hello');
console.log(pieter.speak(), pietje.speak());

// als je een arrow function gebruikt, vervalt this en de constructor werkt niet

// -------------
// afleiding van constructer = prototype/inheritance
// in andere talen heet prototype = classes
// verschil tussen function declaration en classes is dat het gehoised word

// getter is ophalen
// getter + setter automatisch uitgevoerd - wordt vrijwel nooit gebruikt