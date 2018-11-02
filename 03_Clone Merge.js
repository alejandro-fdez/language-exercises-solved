/* 
 * Author: Alejandro Fernández de la Peña
 * --------------------------
 * Módulo 2 Lenguajes
 * --------------------------
 * 3. CLONE MERGE
 */


// CLONE
// -------
// Implementa una función clone que, a partir de un objeto de entrada source devuelva
// un nuevo objeto con las propiedades de source :

function clone1(source) {
    return newObj = {...source};
}

function clone3(source) {
    return JSON.parse(JSON.stringify(source));
}

function clone2(source) {
    let newObj = {};

    for (let property in source) {
        newObj[property] = source[property];
    }
    return newObj;
}

const objectToClone = {
    name:       "Alejandro", 
    lastname:   "Fernández"
};

const clonedObject1 = clone1(objectToClone);
const clonedObject2 = clone2(objectToClone);
const clonedObject3 = clone3(objectToClone);

console.log(
    'Solution to Clone:', 
    objectToClone, 
    clonedObject1, 
    clonedObject2, 
    clonedObject3, 
    objectToClone!==clonedObject1 
    && clonedObject1!==clonedObject2 
    && clonedObject2!==clonedObject3 
);


// MERGE
// -------
// Implementa una función merge que, dados dos objetos de entrada source y target ,
// devuelva un nuevo objeto con todas las propiedades de target y de source , y en caso
// de propiedades con el mismo nombre, source sobreescribe a target .

// Por ejemplo, dados estos 2 objetos:

const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

function merge1(source, target) {
    let finalObj = clone1(source);
    for (let property in target)
    finalObj[property] = target[property];

    return finalObj;
}

function merge2(source, target) {
    let finalObj = clone1(source);

    return Object.assign(finalObj, target);
}

console.log(
    'Solution to Merge:', 
    a, 
    b, 
    merge1(a, b),
    merge2(a, b),
    a,
    b
);