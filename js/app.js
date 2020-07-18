//"use strict" te obliga a seguir las buenas prácticas de declaración porque sino rompe la app
"use strict"

// alert despliega un mensaje en un box cuando se carga la web
alert ('Mensaje de alerta con la etiqueta alert desde js')

// Imprime por consola
console.log('Hola desde Consola con console.log')

// Declara variable variable
// palabraReservada + nombreDeLaVariable = valorDeVariable
var nombre = 'Eddie Vedder'
// imprime por consola un String + el value de la var
console.log('El cantante de Pearl Jam es: ' + nombre)

//VAR: No almacenan datos persistentes. Cuando se le otorga un nuevo valor, el valor original se destruye
// scope: Espacio que abarca en su uso.
// Para trabajar con variables globales se utiliza la palabra var. Se declara por fuera de la función y se la 
//puede invocar desde cualquier parte del código.

//LET: 
// Para delimitar una variable de bloque dentro de una función o una estructura de datos se utiliza let

//CONST: Contenedores de datos que no permiten cambiar el dato que almacenan a lo largo del programa mientras se ejecute

const pi = 3.1416;

// pi = 15; // Esto rompe ya que no se puede asignar un nuevo valor a const


// DATOS

// NUMéRICOS: 
// var edad = 25; (Se pueden utilizar floats y negativos)
// FUNCIONES P/ NúMEROS:
var parseStringToNumber = Number('100') //convierte el String '100' a number
var parseFloatToInt = parseInt(100.00) //convierte el float a entero
var parseIntToFloat = parseFloat(100) 

// STRING
//var guitarrista = 'Mark Knopfler';
// FUNCIONES P/ NúMEROS:
var parseToString = String(35)

//BOOLEAN
// var activo = true;
var testBoolean = Boolean(10 > 9); //Corrobora afirmación y devuelve true

//FECHA
var fecha = new Date() //Imprime fecha al momento de ejecutarlo con horario y uso
fecha.getDay() // Día de la semana que nos encontramos: Martes=2
fecha.getDate() // Día del mes que estamos
fecha.setDate(5) // Fija la fecha 5/del mes que estés ejecutando

//SíMBOLO
// var nombreSimbolo = Symbol();

var ambiente = Symbol('dev = desarrollo') //Ejejutamos por consola ambiente y nos indica en qué ambiente estamos
//Cada símbolo tiene un valor único e inmutable dentro del programa

//JSON =>  JavaScript Object Notation
// Formato de intercambio de datos, liviano y descriptivo. Podemos crear el objeto y enviarlo:

var banda = { name: 'Pearl Jam', genre: 'Grunje'}

var bandas = [
    { name: 'Pearl Jam', genre: 'Grunje'},
    { name: 'The Beatles', genre: 'Rock'},
    { name: 'Bright Eyes', genre: 'Indie'},
    { name: 'Silverchair', genre: 'Grunje'},
    banda,
]

// Si queremos utilizar los datos y enviarlos a un server o utilizarlos localmente:
var bandasJSON = JSON.stringify(bandas); //Pasa el array de objetos a String

// Para volver a convertirlo a objeto:
var bandasObject = JSON.parse(bandasJSON);



//OPERADORES ARITMéTICOS

// Suma: símbolo asociado +
var sumaA = 10;
var sumaB = 4;
var resultadoSuma = sumaA + sumaB;

// Resta: símbolo asociado -
var restaA = 20;
var restaB = 6;
var resultResta = restaA - restaB;

// Multiplicación: símbolo *
var multA = 7;
var multB = 2;
var resultMult = multA * multB;

//División
var divA = 28;
var divB = 2;
var resultDiv = divA / divB;

//Módulo
var modA = 114;
var modB = 100;
var resultMod = modA % modB;

//Incremento
var increm = 13;
var resultIncr = increm++;

//Decremento
var decr = 15;
var resultDecr = decr--;



//OPERADORES RELACIONALES
// Validan o definir la relación entre dos entidades. Siempre se obtiene un Boolean

var datoA = 10;
var datoB = 20;

//Mayor que >
var mayor = datoA > datoB // false

//Menor que <
var menor = datoA < datoB // true

//Mayor o igual >=
var mayOIgual = datoA >= datoB // false

//Menor o igual <= 
var menOIgual = datoA <= datoB // true

//Igual ==
var esIgual = datoA == datoB //false

//Diferente !=
var esDif = datoA != datoB // true



//OPERADORES LóGICOS
// Sirven para combinar la evaluación de dos o más condiciones

// Operador and &&
var and = (datoA > 10 && datoB > 10) // false, tendría que ser <=

//Operador Or ||
var or = (datoA > 10 || datoB > 10) // true, se cumple la segunda condición

//Operador Not !
var not = !(datoA > 10) // true, no es mayor.



//OPERADORES DE ASIGNACIóN
// Permiten guardar el resultado de una operación / evaluación o dato

//Simple =
var igual = datoA; // igual = 10;

//Sumar y Asignar +=
var masIgual =+ datoA; // masIgual = 0 + datoA = 10.

//Restar y asignar -=
var menosIgual = 0; 
menosIgual -= datoA; // menosIgual = -10.



//OPERADORES DE CONCATENACIóN

var name = 'Andy';
var surname = 'Hull';

// Concatenador de números
// Para concatenar números hay que pasarlos a String

//Concatenador texto
var fullName = name + surname; //fullName = AndyHull



// OPERADORES TERNARIOS O CONDICIONALES
// Permite hacer dos operaciones en una. Una evaluación de datos
//y dependiendo el resultado hacer la asignación de un valor

//Condición ? TRUE : FALSE
var resultConcat = datoA > datoB ? "Sí, es mayor" : "No, es menor";


// OPERADOR TIPO DE DATO
//(typeof var) Nos permite saber qué tipo de dato es el almacenado en la variable



//CONDICIONES O DECISIONES
// Permite tomar decisiones para saber que flujo de código seguir en el programa

//IF
var resultadoIf = "Sin datos"
if( datoA > datoB) {
    //Agrupar acciones a tomar si se cumple la condición
    resultadoIf = "La condición se cumplió";
} // En este caso como datoA es menor a datoB resultadoIf = "Sin datos"

//IF-ELSE
// Si la condición se cumple se ejecuta un código, si no se cumple se ejecuta otro
if( datoA > datoB ) {
    resultadoIf = "La condición se cumplió";
} else {
    resultadoIf = "La condición NO se cumplió";
} // En este caso resultadoIf = "La condición NO se cumplió"
  // Podemos agregar más evaluaciones con else if { }

  // CONDICIONES ANIDADDAS
  // Permiten anidar una estructura de control dentro de otra estructura


  //SWITCH
  // Cuando se anidan muchos if/elseif/else se puede pasar al operador Switch

var edad = 10;
var resultado = "";

  switch(edad){
        case 10: 
            resultado = "Tiene 10 años";
        break;
        case 20:
            resultado = "Tiene 20 años";
        break;
        case 30: 
            resultado = "Tiene 30 años";
        break;
        default:
            resultado = "No tiene 10, 20, ni 30";
        break;
  }


