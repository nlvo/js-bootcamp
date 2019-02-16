# Hoofdstuk 8 | Bugs and errors
Het process van het vinden van /bugs/ noemen ze /debugging/

## Strict mode
Zorgt ervoor dat Javascript een stuk ‘strenger’ wordt.

Bijvoorbeeld als je in een loop een binding vergeet te declareren, wat ervoor zorgt dat Javascript stilletjes in de achtergrond een /global/ binding creëert en hiervan gebruik zal maken. Met /strict mode/ zal Javascript een error geven.

## Exceptions
Op het moment dat een functie niet normaal kan gaan doorgaan, willen we stoppen met hetgeen dat we aan het doen zijn en meteen naar een plaats gaan dat weet hoe het probleem gehandeld moet worden. Dat is wat een /exception handling/ doet.

Exceptions is een mechanisme dat mogelijk maakt voor code die tegen een probleem aanlopen om een exception te geven.

* To /raise/ (or /throw/ ) an exception
* An exception can be _any_ value
* The _throw_ keyword is used to raise an exception.
* Catching one is done by wrapping a piece of code in a _try_ block, followed by the keyword _catch_.

```javascript
function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("Which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}
```

Wanneer de code in de try blok een /exception/ veroorzaakt, wordt de /catch/ blok geëvalueerd, met de naam tussen haakjes gekoppeld aan de /exception value/. Na dat de /catch/ blok voltooid is, of als de try blok voltooid is zonder enige probleem zal de programma verder gaan onder de gehele try/catch statement.

## Cleaning up after exceptions
> One way to address this is to use fewer /side effects/. Again, a programming style that computes new values instead of changing existing data helps. If a piece of code stops running in the middle of creating a new value, no one ever sees the half-finished value, and there is no problem.

```javascript
function transfer(from, amount) {
  if (accounts[from] < amount) return;
  let progress = 0;
  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress == 1) {
      accounts[from] += amount;
    }
  }
}
```

> This version of the function tracks its progress, and if, when leaving, it notices that it was aborted at a point where it had created an inconsistent program state, it repairs the damage it did.

## Assertions
> /Assertions/ are checks inside a program that verify that something is the way it is supposed to be.

In plaats van stilletjes /undefined/ teruggeven (op het moment dat een array property niet bestaat), kun je een functie maken die checkt of iets is zoals het hoort of niet.

```javascript
function firstElement(array) {
  if (array.length == 0) {
    throw new Error("firstElement called with []");
  }
  return array[0];
}
```

Dit kun je het best doen voor fouten die gemakkelijk worden gemaakt (of juist diegene die je aan het maken bent).
---
## Freecodecamp
Try/catch zal alleen werken als de syntax correct Javascript is. Op het moment dat de syntax incorrect is, en je de code probeert uit te voeren zal er een error worden gegeven dit noemen ze een /parse time error/.

Try en catch handelen alleen runtime errors, de code moet dus uitgevoerd kunnen worden voordat de try/catch kan werken.

### Try
Laat je een blok van code testen voor errors.

### Catch
Handelen van de error.

### Finally
Laat je code uitvoeren na de /try/ en /catch/ ongeacht de resultaat. Dit zal altijd uitgevoerd worden.

### Throw
Creëren van custom errors, dit kunnen:
* nummers
* strings
* booleans
* new syntax errors
 `throw new SyntaxError(‘message’);`

Err(or) object heeft 2 _methodes_
* name
* message

#project-tech/summaries/elequentjavascript