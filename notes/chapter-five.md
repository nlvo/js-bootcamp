# Hoofdstuk 5 | Higher-Order Functions
- - - -
### Standaard array methods
* forEach
* filter
* reduce
* map
* findIndex
- - - -
### Higher-order functions
* some
- - - -
## Abstraction
## Abstracting repetition

## Higher-order functions
> Functions that operate on other functions, either by taking them as arguments or by returning them, are called_higher-order functions_.  

_Een functie die een andere functies veranderd._
```javascript
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1
```

> f(x)(y) means: Call _f_, passing _x_ as an argument. Then take the returned value (which must be another function), and call that, passing _y_ as an argument.   
>   
> It works like   
```javascript
var tmp = f(x); 
tmp(y);
```

[javascript - Higher order function using Boolean as argument - Stack Overflow](https://stackoverflow.com/questions/31636118/higher-order-function-using-boolean-as-argument)

## Script data set
## Filtering arrays
```javascript
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));
// → [{name: "Adlam", …}, …]
```

De functie hierboven noemen ze een _pure_ function, omdat er een nieuwe array wordt aangemaakt met elementen die aan de voorwaarden voldoen in plaats van het verwijderen van elementen uit de huidige array.

Het past niet de gegeven array aan.

## Transforming with map
Met de map function zet je een array om naar een nieuwe vorm.

## Composability
_Composability_  = combineerbaarheid/combinatiemogelijkheden