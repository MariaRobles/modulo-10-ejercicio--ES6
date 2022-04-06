
//Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene una propiedad llamada id (debe devolver booleano true/false).

const usersSample = [
  {
  id: 23564, 
  name: "María", 
  age: 30, 
},  
]
const hasId = (users) => users.every(user => user.id)
console.log(hasId(usersSample));

//Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.

const positions = ["first", "second", "third"];

const head = ([primero]) => primero; 
console.log(head(positions));

// Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los elementos menos el primero.

const tail = ([, segundo, tercero]) => segundo + " " + tercero; 
console.log(tail(positions));

//Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array donde el primer elemento ha sido colocado en la última posición.

const [primero, segundo, tercero] = positions;

const swapFirstToLast  = (...arguments) =>{
  return arguments;
} 

console.log(swapFirstToLast(segundo, tercero, primero));

// Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro array filtrado con aquellas palabras que empiecen por a.

const wordsWithA = ["almendra", "botella", "manzana", "albaricoque"]

const wordsStartingWithA = (words) => words.filter(word => word.startsWith("a"));
console.log(wordsStartingWithA(wordsWithA)); 


//Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la concatenación de todos, separados por |.

const palabraConcatena = ["hola", "que", "tal"];

const concat = (palabras) => palabras.join(" | ");

console.log(concat(palabraConcatena));

// Implementa una función llamada multArray que admita un array de números (arr) y otro parámetro que sea un número (x) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.

const multiplicar = [ 1, 2, 3, 4 ];

const multArray = (numeros, multiplicador) => numeros
  .map(numero => numero * multiplicador);
console.log(multArray(multiplicar, 2));

//Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como resultado el producto de todos ellos.

const calcMult = (numeros) =>
  numeros.reduce((acc, numero)=> acc * numero , 1);
console.log(calcMult(multiplicar));