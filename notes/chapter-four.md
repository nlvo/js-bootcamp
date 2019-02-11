# Hoofdstuk 4 | Data Structures: Objects and Arrays
## Data sets
Met behulp van een array kun je meerdere waardes opslaan.

```javascript
let listOfValues = [1,7,10,19,96];

console.log(listOfValues[0]);
// → 1
```

De eerste index van een array is nul, niet één.

## Properties
> Almost all JavaScript values have properties. The exceptions are _null_ and _undefined_. If you try to access a property on one of these nonvalues, you get an error.  

```javascript
null.length;
// → TypeError: null has no properties
```

Er zijn twee manieren waarop je _properties_ kunt ophalen in Javascript namelijk met een _dot_ en met _square brackets_. 

```javascript
value.x; 
value[x];
```

Beide manieren halen de _property_ van value op, maar niet per se dezelfde dezelfde _property_.

_Property names_ zijn strings. Maar _dot notation_ werkt alleen met namen dat eruit zien als geldige _bindings_. Dus als je een _property_ genaamd 2 of _eloquent javascript_ wilt ophalen, zul je gebruik moeten maken van _square brackets:_ value[2] of value [‘eloquent javascript’].

### Dot notation
```javascript
objectName.propertyName;
```

Als je met _dot notation_ werkt, properties identificeren kan alleen alfabetisch (en _ en $) zijn. En kunnen _niet_ beginnen met een nummer (net zoals bindings).

Het is ook makkelijker te lezen dan _brackets notation_ hierdoor wordt het ook meer gebruikt.

* Property identifies can only be alphanumeric (and `_` and `$` )
* Property identifiers cannot start with a number.
* Property identifiers _cannot_ contain variables.
* OK —  `obj.prop_1` ,  `obj.prop$`
* Not OK  —  `obj.1prop` , `obj.prop name`

### Brackets notation
```javascript
objectName["propertyName"]

arrayName[element]
```

* Property identifiers have to be a String or a variable that references a String.
* It is okay to use variables, spaces, and Strings that start with numbers
* OK —  `obj[“1prop”]`  , `obj[“prop name”]`

[JavaScript Quickie— Dot Notation vs. Bracket Notation](https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781)

## Methods
Methods zijn in feite properties die functies bevatten.

```javascript
let array = [1, 2, 3];
array.push(4);
array.push(5);
console.log(array);
// → [1, 2, 3, 4, 5]
console.log(array.pop());
// → 5
console.log(array);
// → [1, 2, 3, 4]
```

Twee methodes waarmee je arrays kunt manipuleren:
* `array.push(4);`
Hiermee voeg je een waarde toe aan het eind van de array

* `array.pop(4);`
Hiermee haal je de laatste waarde weg uit de array

## Objects
Properties die een niet geldige binding benaming hebben of geldige nummer hebben moeten tussen haakjes/quotes worden gezet.

> Reading a property that doesn’t exist will give you the value _undefined_.  

Het is mogelijk om een waarde toe te wijzen aan een _property_ expression met een = operator. Dit zorgt ervoor dat de _property_ waarde wordt vervangen als het al bestaat en anders wordt er een nieuwe _property_ gecreëerd in de object.

> To briefly return to our tentacle model of bindings—property bindings are similar. They_grasp_values, but other bindings and properties might be holding onto those same values. You may think of objects as octopuses with any number of tentacles, each of which has a name tattooed on it.  
>   
> The _delete_ operator cuts off a tentacle from such an octopus. It is a unary operator.  