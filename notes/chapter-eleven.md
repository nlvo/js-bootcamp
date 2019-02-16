# Hoofdstuk 11
## Asynchronicity
> In a _synchronous_ programming model, things happen one at a time.  
>   
> An _asynchronous_ model allows multiple things to happen at the same time.  
>   
> A _thread_ is another running program whose execution may be interleaved with other programs by the operating system—since most modern computers contain multiple processors, multiple threads may even run at the same time, on different processors.  

## Crow tech
## Callbacks
Een callback functie is niets anders dan een functie die pas wordt uitgevoerd op het moment dat een ander functie klaar is/uitgevoerd is.

> One approach to asynchronous programming is to make functions that perform a slow action take an extra argument, a _callback function_ . The action is started, and when it finishes, the callback function is called with the result.  

setTimeout();

## Promises
Methods
* resolve
	De functie verzekerd je ervan dat de waarde die je geeft in een _promise_ wordt gezet.
* then
	Hiermee kun je de resultaat van de promise opvragen/halen.

- - - -
`setTimeout()`  is een simpele voorbeeld van een asynchronische functie, want je kunt hiermee aangeven dat na x aantal milliseconde de functie pas wordt uitgevoerd. Maar dit betekend niet dat de rest van de code niet word uitgevoerd, wat wel gebeurt als het een syncronische functie zou zijn.