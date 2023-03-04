import { countries } from "./countries.js";
import { webTechs } from "./web_tech.js";

// 4. En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'. Si no existe agregar a la lista de países.

if(countries.includes('Ethiopia')) {
    console.log(countries.indexOf('Ethiopia'))
    console.log(countries[57].toString().toUpperCase());
} else {
  countries.push('Ethiopia');
}


// 5. En el array webTechs, verifique si Sass existe en el array y si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass al array e imprima el array.

if(webTechs.includes('SASS')) {
    console.log(`Sass es un preproceso de CSS`)
} else {
    webTechs.push('SASS');
    console.log(webTechs);
}


// 2. Cortar los diez primeros países de la [array de países](./arrays/countries.js)
countries.slice(0, 10);

// 3.  Encuentre el país o países de en medio en el [array de países](./arrays/countries.js)
let middlecountry = countries[countries.length / 2];
console.log(middlecountry);

// Divide el array de países en dos arrays iguales si es par. Si el array de países no es par, agregue un país más para la primera mitad.
if(countries.length % 2 === 0) {
    let mitad = countries.length / 2;
    countries.slilce(0, mitad);
    countries.slice(mitad + 1, countries.length -1)
} else {
    countries.push('Españita');
    let mitad2 = countries.length / 2;
    countries.slice(0, mitad2);
    countries.slice(mitad2 + 1, countries.length - 1);
}
