# Hoofdstuk 6 | The Secret Life of Objects
## Encapsulation
> Separating interface from implementation is a great idea. It is usually called _encapsulation_.  

## Methods
> Methods are nothing more than properties that hold function values  

## Prototypes
> In addition to their set of properties, most objects also have a _prototype_ . A prototype is another object that is used as a fallback source of properties. When an object gets a request for a property that it does not have, its prototype will be searched for the property, then the prototype’s prototype, and so on.  
>   
> So who is the prototype of that empty object? It is the great ancestral prototype, the entity behind almost all objects,  `Object.prototype` .    

`Gallery.prototype.zoomIn`

## Getters, setters, and statics
## Inheritance
## Classes
> A class defines the shape of a type of object—what methods and properties it has. Such an object is called an_instance_of the class.  

```javascript
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

function Person(name, shoeSize, laughingStyle) {
    this.name = name,
    this.shoeSize = shoeSize,
    this.laughingStyle = laughingStyle
}
```

> So to create an instance of a given class, you have to make an object that derives from the proper prototype, but you_also_have to make sure it, itself, has the properties that instances of this class are supposed to have. This is what a_constructor_function does.  

## Classes
> The _class_ keyword starts a class declaration, which allows us to define a constructor and a set of methods all in a single place.  

```javascript
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
```

> The one named _constructor_ is treated specially. It provides the actual constructor function, which will be bound to the nameRabbit.  
- - - -
_Class_ declaraties zijn niet _hoisted_, dus je kan niet een _class_ gebruiken/aanroepen voordat het is aangemaakt.

_Hoisting_, is niks anders dan Javascript die automatisch alle declaraties bovenaan de _current scope_ plaatst.

_Gallery.prototype.zoomIn_
Wordt een keer aangemaakt dit zorgt ervoor dat je op een efficiënte manier een methode kunt toe te voegen. I.p.v. een method in de _function_ te zetten.
- - - -