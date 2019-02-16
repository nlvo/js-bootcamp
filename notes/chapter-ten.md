# Hoofdstuk 10
## Modules
> A module is a piece of program that specifies which other pieces it relies on and which functionality it provides for other modules to use (its /interface/ ).

De relaties tussen modules worden /dependencies/ genoemd.

> When a module needs a piece from another module, it is said to _depend_ on that module.

Op het moment dat een module een stukje nodig heeft van een andere module, gebruiken ze de term /depend/.

## Packages
A package is a chunk of code that can be distributed (copied and installed). It may contain one or more modules and has information about which other packages it depends on.

## CommonJS
he way the string given to require is translated to an actual filename or web address differs in different systems. When it starts with ” `. /` “ or ” `../` “ , it is generally interpreted as relative to the current module’s filename. So ” `. /format-date` ” would be the file named format-date.js in the same directory.

```javascript
// destructuring assignment
const { items } = args
const items = args.items
```

> The*destructuring assignment*syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
[Destructuring assignment - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## ECMAScript modules
ES module

Javascript module system
* import
* export
* default

## Building and bundling
Het ophalen van één groot document is vaak sneller dan meerdere kleine documentjes.

Hierdoor kiezen programmeurs er vaak voor om alle modules terug te zetten in een groot document met behulp van tools, dit soort tools worden  /bundlers/ genoemd.

Naast de hoeveelheid documenten, de grootte van een document bepaalt ook hoe snel ze via het netwerk overgedragen kunnen worden. Daarvoor komen /minifiers/ van toepassing.

> These are tools that take a JavaScript program and make it smaller by automatically removing comments and whitespace, renaming bindings, and replacing pieces of code with equivalent code that take up less space.

## Module design
Pluspunt
* gebruiksgemak
* the ease with which something can be composed with other code.

* Bestaande /conventions/ te gebruiken.
* Voorspelbaar, gebruik maken van simpele data structuur en een specifiek ding doen (een doel).
* Focused modules that compute values are applicable (no side effects)

_Stateful_ object
https://toddmotto.com/stateful-stateless-components#stateful

#project-tech/summaries/elequentjavascript