# Hoofdstuk 2 | Program Structure
## Expressions and statements
### Expressions
> Expression is a piece of code that produces a value.  

_Expression_ is een stuk code dat naar een waarde wordt omgezet.

![](&&&SFLOCALFILEPATH&&&Screen%20Shot%202019-02-06%20at%2022.38.03.png)

 _voorbeeld 1_
```javascript
let e = 5;
```

5 is een waarde, maar voor de vertaler is ‘5’ een _expression_ dat wordt omgezet naar de waarde 5.

_voorbeeld 2_
```javascript
let e = 2 + 3;
```

_voorbeeld 3_
```javascript
var x = getValue();
```

De functie die wordt aangeroepen _getValue()_ is ook een _expression_, omdat de functie een waarde terug geeft. Dus de functie wordt omgezet naar een waarde en hierdoor is het een _expression_.

Niet alles in de code wordt een waarde. En dus niet alles is een _expression_, alhoewel de meeste wel zijn.

![](&&&SFLOCALFILEPATH&&&Screen%20Shot%202019-02-06%20at%2023.25.14.png)
Meerdere _subexpressions_


### Statement
> A statement is an instruction, an action  
Voorwaarden met
	* if
	* loops
		* for
		* while
zijn allemaal statements omdat ze acties uitvoeren en besturen, maar ze worden geen waardes.

### side effects
> A side effect is any application state change that is observable outside the called function other than its return value. _Side effects_ include:  

* Modifying any external variable or object property (e.g., a global variable, or a variable in the parent function scope chain)
* Logging to the console
* Writing to the screen
* Writing to a file
* Writing to the network
* Triggering any external process
* Calling any other functions with side-effects

[Master the JavaScript Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

## Bindings
```javascript
let binding = 'value';
//binding - operator - expression
```

_Let_ geeft aan dat deze regel een _binding_ zal definiëren. En wordt gevolgd door een naam.

> You should imagine bindings as tentacles, rather than boxes. They do not_contain_values; they_grasp_them—two bindings can refer to the same value. A program can access only the values that it still has a reference to. When you need to remember something, you grow a tentacle to hold on to it or you reattach one of your existing tentacles to it.  

_Soorten _bindings__
* var (variables)
* let
* const (constant)
_Const_ kan alleen gebruikt worden binnen de scope en de waarde kan niet veranderd worden of opnieuw worden gedeclareerd.

## Binding names
_Binding names_ kunnen elk woord zijn. Nummers kunnen onderdeel zijn van _binding names_— naam22 bijvoorbeeld is een geldige naam. 

Ook mag je gebruik maken van een dollartekens of een laagstreepje, maar geen leestekens of speciale karakters.

_Niet_
* Starten met een _number_
* Javascript _keywords_ gebruiken
* _‘Gereserveerde’_ woorden voor toekomstige versies van JS.

## The environment
> The collection of bindings and their values that exist at a given time is called the_environment_.  

## Functions
> Executing a function is called_invoking_,_calling_, or_applying_it.  
_Uitvoeren van een functie_

Waardes die gegeven zijn aan functies worden _arguments_ genoemd.

## The console.log function
Console.log is een functie waarmee je tekst kunt tonen in de _console_ in je browser.

> Though binding names cannot contain period characters, console.log does have one. This is because console.log isn’t a simple binding. It is actually an expression that retrieves the log property from the value held by the console binding.  

## Return values
> When a function produces a value, it is said to _return_that value.  

## Control flow
Op het moment dat je programma meer dan een _statement (instructie)_ bevat zal het van boven naar beneden worden uitgevoerd.

_straight-line control flow_
![](&&&SFLOCALFILEPATH&&&CB0984C0-B241-4312-8482-45B454A05E22.png)

## Conditional execution
![](&&&SFLOCALFILEPATH&&&74BF127C-A462-4DCE-B60B-3E5A84DE5FDC.png)

**Voorwaardes**
if_if else_else

```javascript
var condition = 'true';
if(condition == 'true'){
	console.log('the conditional is true');
}
```

> The statement after the _if_ is wrapped in braces ({and}) in this example. The braces can be used to group any number of statements into a single statement, called a _block_.  

```javascript
> if (1 + 1 == 2) console.log("It's true");
> // → It's true
```

In dit geval kun je de _curly braces_ ook weglaten, omdat de _if statement_ maar een voorwaarde bevat.

_‘Chain’_ if/else
Je kunt als het ware if/else paren aan elkaar koppelen als je meer dan twee voorwaardes hebt.

![](&&&SFLOCALFILEPATH&&&23EB5FA7-49DB-488E-94D9-D61E35825136.png)

## While and do loops
Een _loop_ is niets anders dan een stukje code die je meerdere keren uitvoert.

Een _looping control flow_ geeft ons de optie om terug te gaan naar een specifiek punt in het programma waar we eerst waren en het te herhalen 
in de staat van de huidige programma.

**While**
```javascript
let number = 0;
while (number <= 22) {
	number += 2;
}
```
_Terwijl number kleiner is dan 22 tel dan 2 erbij, tot dat number gelijk is aan 22._

De _while_ loop zal de instructie blijven uitvoeren zolang de waarde _true_ is op het moment dat de waarde omgezet wordt naar een _boolean_.

**Do**
Een _do while loop_ zal altijd een keer uitgevoerd worden, zelfs als de voorwaarde nooit _true_ is.

```javascript
do {
    // voor code uit
} while (voorwaarde);
```

## Indenting Code
Het indenten van je code, zorgt ervoor dat je code netjes en gestructureerd is en blijft, hierdoor is je code goed leesbaar. Alhoewel je alles op een line kunt doen is dit niet aan te raden.

## For loops
Een _for_ loop doet vaak hetzelfde als een _while_ loop, maar een _for_ loop is iets duidelijker.

De _parentheses_ na een _for_ keyword moet twee _semicolons_ bevatten. 

1. Het gedeelte voor de _eerste_ _semicolon_ initialiseert te loop, meestal door middel van een _binding_. 
2. Het _tweede_ deel is de _expression_ dat controleert of de loop moet doorgaan. 
3. Het _laatste_ deel _update_ de staat van de loop na elke iteratie.

## Breaking Out of a Loop
Je kunt een loop niet alleen verbreken als een voorwaarde _false_ is, maar je kunt ook gebruik te maken van een _break_.

Een _break_ statement kan een loop meteen afbreken.

Daarnaast is er een een soortgelijke statement genaamd _continue_ dit heeft een soortgelijke werking namelijk het heeft invloed op de progressie van een loop. 

Wanneer een loop body _continue_ tegenkomt, zal de _loop_ daar stoppen en pas verder gaan bij de volgende iteratie van de _loop_.

## Updating bindings succinctly
_succinctly_ = kort en bondig/beknopt

_Shortcut_
```javascript
//counter = counter + 1;
counter += 1;
```

Nog een kortere versie is
```javascript
// counter += 1
counter++;

// counter -=1
counter--;
```

## Dispatching on a value with switch
> It is not uncommon for code to look like this:  

```javascript
if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();
```

> There is a construct called _switch_ that is intended to express such a “dispatch” in a more direct way.  

```javascript
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
```

## Capitalisation
_Binding_ names mogen geen spaties bevatten, maar het kan nuttig zijn om meerdere woorden te gebruiken om te beschrijven wat de _binding_ vertegenwoordigd.

_bindingcapitalisation_, is moeilijk te lezen. Je kunt er voor kiezen om de binding in _camelCase_ of met behulp van een _underscore_ te schrijven.

```javascript
var bindingCapitalisation;
var binding_capitalisation;
```

Over het algemeen wordt er in Javascript gekozen voor _camelCase_.

## Comments
Is een stuk tekst dat wordt genegeerd door de computer. Er zijn 2 manieren van schrijven van een _comment_

### Two slash
```javascript
// comment met double slash
```

### Block comment
Handig als je wat grote stukken tekst met informatie wilt toevoegen over een document aan je code.

```javascript
/*
 Whole comment block gets ignored, regardless of whether it contains line breaks
 */
```