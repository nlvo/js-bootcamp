# Hoofdstuk 1
Er zijn _vier soorten_ waardes in Javascript waaronder:
1. numbers
2. strings
3. Booleans
4. undefined values

**Nummers**
* Hele numer (integer)
### Arithmetic (rekenkunde)Arithmetic operations (rekentekens)
De + en * symbolen worden _operators_ genoemd.

Het procent (%) teken wordt gebruikt als een _remainder operator (rest),_wordt ookwel _modulo_ genoemd.

**Speciale nummers**
* Infinity 
* -Infinity
* Infinity - 1

NaN = Not a Number

**Strings**
‘tekst’\n = newline

_concatenates_ = toevoegen combineren aan elkaar plakken

_Strings_ kunnen niet worden gedeeld, vermenigvuldigd of afgetrokken worden, maar het + operator kan wel gebruikt worden. Het wordt dan niet bij elkaar opgeteld maar zoals ze het noemen in het boek “_concatenates_”.

```javascript
‘sa’ + ‘men’ + ‘ge’ + ‘voegd’;
```

-> “It does not add, but it _concatenates_ — it glues two strings together.”

_Strings_ met dubbel quotes of enkele werken vrijwel hetzelfde. 

Maar met behulp van _back ticks_ is het mogelijk om nog andere dingen te doen naast de mogelijkheid om regels tekst te creëren, je kunt namelijk ook andere waardes er in zetten.

Back ticks worden _template literals_ genoemd

```javascript
 `de helft van 100 is ${100 / 2}`
//resultaat de helft van 100 is 50
```

Wanneer je iets tussen ${} plaatst in een _template literal_ , zal het resultaat worden berekend, omgezet worden naar een _string_ , and toegevoegd worden op de plek.

**Unary operators**
Niet alle _operators_ zijn symbolen. Sommige kunnen woorden zijn, een voorbeeld hiervan is de _typeof_  operator.

Andere _operators_ die getoond zijn werken op 2 waardes, maar de _typeof_ heeft er maar 1 nodig. 

_Operators_ die gebruik maken van 2 waardes worden _binary_ operators genoemd, terwijl diegene die er maar een nodig hebben worden _unary_ operators genoemd.

De _minus_ operator kan **beide** worden gebruikt als _binary_ and als een _unary_ operator.

**Boolean values**
_Boolean_ type heeft twee waardes, waar (true) of niet waar (false).

**Comparison**
Manier 1 om een _boolean waarde_ te produceren  `> < `  zijn _binary_ operators

```javascript
console.log(3 > 2)
// → true
console.log(3 < 2)
// → false
```

Strings kunnen ook vergeleken worden op dezelfde manier.

```javascript
console.log(“Aardvark” < “Zoroaster”)
// → true
```

Hoofdletters zijn altijd _kleiner_ dan kleine letters, en de niet alfabetische characters. Wanneer Javascript _strings_ vergelijkt leest het van links naar rechts, vergelijkt het de _Unicode codes_ een voor een.

Andere vergelijkbare _operators_ zijn `>=` , `<=` , `==` , en `!=` .

```javascript
console.log(“Itchy” != “Scratchy”)
// → true
console.log(“Apple” == “Orange”)
// → false
```

Er is alleen _een waarde_ in Javascript dat niet gelijk is aan zichzelf, en dat is NaN (’Not a Number’).

```javascript
-> console.log(NaN == NaN)
-> // → false
```

Omdat NaN een error is die aangeeft of iets niet klopt, kan het dus niet gelijk zijn aan zichzelf.

**Logical operators**
Er zijn 3 _logical_ operators

De `&&` operator is een _binary_ operator, en het resultaat is alleen _true_ als beide gegeven waarde _true_ zijn.

De || operator produceert _true_ als ook maar een van de gegeven waarde _true_ is.

_Not_is een (!). Het is een _unary_operator dat de waarde omdraaid.
-> _!true_ produceert _false,_ and _!false_geeft _true_ .

- - - -
Truthy zijn alle waarde behalve _falsy._

**Falsy**
* false
* 0
* ‘’
* null
* undefined
* NaN

[http://adripofjavascript.com/blog/drips/truthy-and-falsy-values-in-javascript.html](http://adripofjavascript.com/blog/drips/truthy-and-falsy-values-in-javascript.html) 

[https://stackoverflow.com/questions/33253254/boolean-conditions-in-console-log-statement](https://stackoverflow.com/questions/33253254/boolean-conditions-in-console-log-statement) 

- - - -
_ternary_ operator 

```javascript
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
```

Dit wordt een _conditional_ operator genoemd (of soms gewoon _ternary_ operator, sinds het de enige is met zo’n operator). De waarde aan de linker kant van de vraagteken bepaald welke van de twee andere waardes zal uitkomen.

Waneer het _true_ is, kies de middelste waarde, en wanneer het _false_ is, zal het de rechter waarde kiezen.

**Empty values**
Er zijn twee speciale waardes, _null_  en _undefined_ , die worden om het ontbreken van een zinvolle waarde aan te geven. Ze zijn zelf waardes, maar ze bevatten geen informatie.

**Automatic type conversion**
Wanneer een _operator_ wordt toegepast aan de ‘verkeerde’ type waarde, zal Javascript de waarde zelf omzetten naar de type die hij nodig heeft, met behulp van regels die vaak niet zijn zoals je wilt of verwacht. Dit wordt _type coercion_ genoemd.

```javascript
console.log(8 * null)
// → 0
console.log(“5” - 1)
// → 4
console.log(“5” + 1)
// → 51
console.log(“five” * 2)
// → NaN
console.log(false == 0)
// → true
```

null in the first expression becomes 0, and the “5” in the second expression becomes 5(from string to number).

De _null_ in de eerste expressie wordt 0, en de ‘5’ in de tweede expressie wordt 5 (van _string_ naar _number_ ).

Toch probeert de derde expressie met + de _string_ concatenation voor de _numeric addition,_ dus 1 wordt omgezet naar ‘1’ (van _number_ naar _string_).
Wanneer iets niet omgezet wordt naar een nummer wat vanzelfsprekend zou zijn (zoals “five” of _undefined_ ) naar een _number_ ,dan krijg je de waarde NaN.

Echter wanneer _null_ of _undefined_ voorkomt in aan een van de kanten van de _operator_ of beide, het produceert alleen _true_ als beide zijdes een van de _null_ of _undefined_ bevat.

Dit kan handig zijn als je wilt testen of een waarde een echte waarde heeft van _null_ of _undefined._

```javascript
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
```

Als je ervoor wilt zorgen dat Javascript automatisch _type conversion_ uitvoert dan kun je ervoor kiezen om  === of !==. Dit zorgt ervoor dat de waarde _accuraat_ (precies) word vergeleken.