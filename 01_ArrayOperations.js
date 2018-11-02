/* 
 * Author: Alejandro Fernández de la Peña
 * --------------------------
 * Módulo 2 Lenguajes
 * --------------------------
 * 1. Array operations
 */


// HEAD
// ----------
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga
// y devuelva su primer elemento. Utliza destructuring.

const head = ( [headElement] ) => headElement;

const myArrayForHead = [5, 32, 234, 321, 24];

console.log(head(myArrayForHead), myArrayForHead);


// TAIL
// ----------
// Implementa una función tail (inmutable), tal que, dado un array como entrada
// devuelta todos menos el primer elemento. Utliza rest operator.

const tail = ( [headElement, ...tailElements] ) => tailElements;

const myArrayForTail = [5, 32, 234, 321, 24];

console.log(tail(myArrayForTail), myArrayForTail);


// INIT
// ----------
// Implementa una función init (inmutable), tal que, dado un array como entrada
// devuelva todos los elementos menos el último. Utiliza los métodos que ofrece
// Array.prototype.

const init = ( arrayExample ) => arrayExample.slice(0, -1);

const myArrayForInit = [5, 32, 234, 321, 24];

console.log(init(myArrayForInit), myArrayForInit);


// LAST
// ----------
// Implementa una función last (inmutable), tal que, dado un array como entrada
// devuelva el último elemento.

const last = ( arrayExample ) => arrayExample.slice(-1).shift();

const myArrayForLast = [5, 32, 234, 321, 24];

console.log(last(myArrayForInit), myArrayForInit);