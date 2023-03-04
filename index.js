
// ## 💻 Ejercicios

// ### Ejercicios: Nivel 1

// ```js
// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];
// ```

// 1. Declara un array _vacío_.
let emptyList = [];

// 2. Declara un array com mas de 5 elementos.
let moreFiveElements = [1, 2, 3, 4, 5, 6, 7];

// 3. Encuentra la longitud de tu array.
console.log(moreFiveElements.length);

// 4. Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
let firstElement = moreFiveElements[0];
let lastElement = moreFiveElements[moreFiveElements.length - 1];
let middleElement = moreFiveElements[(moreFiveElements.length) / 2];

// 5. Declara un array llamado _mixedDataTypes_, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.
let _mixedDataTypes = [1, 3, 10, "banana", "tomato", "bread"];
console.log(_mixedDataTypes.length);
console.log(_mixedDataTypes);

// 6. Declare un variable array de nombre _itCompanies_ y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
let _itCompanies_ = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Imprima el array usando _console.log()_.
console.log(_itCompanies_);

// 8. Imprima el número de empresas en el array.
console.log(_itCompanies_.length);

// 9. Imprime la primer empresa , la intermedia y la última empresa
console.log(_itCompanies_[0]);
console.log(_itCompanies_[_itCompanies_.length - 1]);
console.log(_itCompanies_[Math.ceil(_itCompanies_.length / 2)]);

// 10. Imprime cada empresa.
console.log(_itCompanies_);

// 11. Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
let face = _itCompanies_[0].toString().toUpperCase();
let goo = _itCompanies_[1].toString().toUpperCase();
let micr = _itCompanies_[2].toString().toUpperCase();
let app = _itCompanies_[3].toString().toUpperCase();
let ibm = _itCompanies_[4].toString().toUpperCase();
let ora = _itCompanies_[5].toString().toUpperCase();
let amz = _itCompanies_[6].toString().toUpperCase();
console.log(face);
console.log(goo);
console.log(micr);
console.log(app);
console.log(ibm);
console.log(ora);
console.log(amz);

// 12. Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
let strIt = _itCompanies_.join(', ');
console.log(`${strIt} son grandes empresas de TI`);

// 13. Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa _no existe_
let it1 = _itCompanies_[0];
let exists = _itCompanies_.includes(it1);
if(exists) {
    console.log(`${it1}`);
} else {
    console.log('La empresa no existe');
}

// 14. Filtre las empresas que tienen más de una 'o' sin el método _filter()_
let cmp1 =_itCompanies_[0].toString().toLowerCase();
let cmp2 =_itCompanies_[1].toString().toLowerCase();
let cmp3 =_itCompanies_[2].toString().toLowerCase();
let cmp4 =_itCompanies_[3].toString().toLowerCase();
let cmp5 =_itCompanies_[4].toString().toLowerCase();
let cmp6 =_itCompanies_[5].toString().toLowerCase();
let cmp7 =_itCompanies_[6].toString().toLowerCase();

let pattern = /o{2}|.o.o/;
console.log(pattern.test(cmp1))
console.log(pattern.test(cmp2))
console.log(pattern.test(cmp3))
console.log(pattern.test(cmp4))
console.log(pattern.test(cmp5))
console.log(pattern.test(cmp6))
console.log(pattern.test(cmp7))


// 15. Ordene el array usando el método _sort()_
let orderList = _itCompanies_.sort();
console.log(orderList);

// 16. Invierte la array usando el método _reverse()_
let invertedList = _itCompanies_.reverse();
console.log(invertedList);

// 17. Cortar las primeras 3 empresas del array
// _itCompanies_.splice(0,3);

// 18. Cortar las últimas 3 empresas del array
// _itCompanies_.splice(4, 3);

// 19. Cortar la empresa o empresas intermedias de TI del array
_itCompanies_.splice(_itCompanies_.length / 2, 1);

// 20. Eliminar la primera empresa de TI del array
_itCompanies_.shift();

// 21. Eliminar la empresa o empresas intermedias de TI del array
_itCompanies_.slice(Math.floor(_itCompanies_.length / 2), 1);

// 22. Elimine la última empresa de TI del array
_itCompanies_.pop();

// 23. Eliminar todas las empresas de TI
_itCompanies_.splice(_itCompanies_.length, -1);

// ### Ejercicios: Nivel 2

// 1. Cree un archivo de countries.js separado y almacene el array de países en este archivo, cree un archivo separado web_techs.js y almacene el array de webTechs en este archivo. Acceda a ambos archivos en el archivo main.js


// 2. Primero elimine todos los signos de puntuación y cambie de string a array y cuente el número de palabras en el array

//    ```js
//    let text =
//      "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
//    console.log(words);
//    console.log(words.length);
//    ```

//    ```sh
//    ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

//    13
//    ```

let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.match(/[a-zA-Z]+/g);
console.log(words);
console.log(words.length);

// 3. En el siguiente carrito de compras agregue, elimine, edite artículos

//    ```js
//    const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
//    ```

//    - Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado
//    - Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado
//    - Elimine 'Honey' si es alérgico a la miel (honey)
//    - Modificar Tea a 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart[3] = 'Green Tea';
shoppingCart.splice(4, 1);


// 4. En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'. Si no existe agregar a la lista de países.
// Realizado en el main


// 5. En el array webTechs, verifique si Sass existe en el array y si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass al array e imprima el array.
//Realizado en el main

// 6. Concatene las siguientes dos variables y guardelas en una variable fullStack.

//    ```js
//    const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
//    const backEnd = ["Node", "Express", "MongoDB"];

//    console.log(fullStack);
//    ```

//    ```sh
//    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
//    ```

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);


// ### Ejercicios: Nivel 3

// 1.  El siguiente es un array de 10 edades de estudiantes:

//         ```js
//         const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//         ```
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];


//         - Ordene el array y encuentre la edad mínima y máxima
ages.sort();
let minAge = ages[0];
let maxAge = ages[ages.length - 1];

//         - Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)

let middleAge = ages[Math.floor(ages.length / 2)];

//         - Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
let medianAge = (ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9]) / 10;

//         - Encuentre el rango de las edades (max menos min)
let ageRange = maxAge - minAge;

//         - Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_
let minMedian = Math.abs(minAge - medianAge);
let maxMedian = Math.abs(maxAge - medianAge);
console.log(minMedian === maxMedian);

// 2. Cortar los diez primeros países de la [array de países](./arrays/countries.js)
// Realizado en main.js

// 3.  Encuentre el país o países de en medio en el [array de países](./arrays/countries.js)
// Realizado en main.js
// 3.  Divide el array de países en dos arrays iguales si es par. Si el array de países no es par, agregue un país más para la primera mitad.
// Realizado en main.js