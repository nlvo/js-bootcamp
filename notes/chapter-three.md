# Hoofdstuk 3 | Functions
Hoofdstuk 2
_A fragment of code that produces a value is called an expression._

## Nested scope
### Lexical scope
Elk _local scope_ kan zijn _local scopes_ zien die hij bevat, en alle scopes kunnen de _global scope_ zien. 

Block scope

## Functions as values
Je kunt een binding meegeven aan een anonieme functie.

### function declaration
> The statement defines the binding square and points it at the given function.  

```javascript
function square(x) {
  return x * x;
}
```

Het maakt niet uit waar je de functie aanroept, omdat Javascript de functie automatisch bovenaan de scope plaats.

## Arrow functions
## Optional Arguments
Als je teveel argumenten meegeeft, maar je hebt maar een parameter meegegeven aan een functie. Zal je geen error krijgen.

Geef je te weinig dan zal je een _undefined_ krijgen.

## Closure
> A function that references bindings from local scopes around it is called_a_closure.  

## Recursion
Een functie die zichzelf van binnen aanroep. In feite een soort van een loop.

_Nadeel_
Sloom

## Functions and side effects
Returns en side effects