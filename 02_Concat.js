/* 
 * Author: Alejandro Fernández de la Peña
 * --------------------------
 * Módulo 2 Lenguajes
 * --------------------------
 * 2. CONCAT
 */


// 2. Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
// devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = (a, b) => a.concat(b); 

const myArrays = [
        [5, 32, 234, 321, 24],
        [64, 23, 76, 12, 545]
    ];

console.log('Solution 1:', concat(...myArrays), myArrays);


// Opcional
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de
// entrada (más de 2).

const concatMultiple = (a, ...arraysLeft) => a.concat(...arraysLeft);

const myInfinitesArrays = [
        [5, 32, 234, 321, 24],
        [64, 23, 76, 12, 545],
        [73, 43, 87, 112, 3],
        [76, 66, 23, 91, 77]
    ];

console.log('Solution 2:', concatMultiple(...myInfinitesArrays), myInfinitesArrays);