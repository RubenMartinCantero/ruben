let a = "alpha"

let b = "beta"

let c = "Gamma"

console.log(a,b,c)

let operacion = (1/2)*(4*5)-(2**3)


console.log(operacion)


let numero = 9
if (numero >10 ){
    console.log(numero/2)
} else {
    console.log(numero*2)
}

// console.log(num>10 ? num/2 : num *2) Esto es una ternaria.


let motor = 0

console.log(motor == 0 ? "El motor esta apagado" : motor == 100 ? "El motor está a máxima potencia" : "El motor está a potencia media " + motor)



// let motor = 100

// if (motor == 0 ){
//     console.log("El motor esta apagado")
// } else if (motor == 100) {
//     console.log("El motor está a máxima potencia")
// } else {
//     console.log("El motor está a potencia media " + motor)
// }


let activo = false
let num = 2

if (activo ) {
    if (num == 1) {
        console.log("Hello world")
    }else {
        console.log("Hello world")
        console.log("Hello world")
    }
} else {
    console.log("EL programa no esta activo")}

// Lo mismo de arriba, reducido un poco:
// if (activo) {
//     if (num > 1) {
//         console.log("Hello world")
//     }console.log("Hello world")
//     }
// } else {
//     console.log("EL programa no esta activo")
// }



let activo2 = true
let num2 = 2

if (activo2 && num2 >= 1) {
    console.log("Hello world")
    if (activo2 == true && num2 == 2) {
        console.log("Hello world")}
} else { console.log("EL programa no esta activo")}


// Bucles Recorre desde el uno hasta el 6

for(let i = 1; i<= 6; i = i + 1 ){
    console.log(i)
}


// // Funcion. multiplicacion.

function multi (a, b, c){
    return a*b*c
}
console.log(multi(897,3333,50))

// Funcion. cuenta atras.

function countdown (num){
    for(let i = num; i >=0; i--) {
         console.log(i)
    }
}

countdown(5)

// 3

function comp (a, b){
    return a > b ? a : b
}

comp (8, 10)

// Array 1. Funcion que recibe dos parámetros y define un array con ellos.

function parm (a,b) {
    let parms = []
    parms.push (a)
    parms.push (b)
    console.log(parms)
}
parm ("Hola",3)


// Array 2. Dar un número y crear un array que de desde el cero hasta ese numero.

function number(a) {
    let numbers = []
    for(let i = 0; i<= a; i = i + 1 ){
            numbers.push (i)
        }
        console.log(numbers)
}
number (10)



// Array 3. Recice un array y debe devoler cada valor por separado.

let peliculas = ["El nombre de la rosa", "La vida es bella", "Volver"];

for (let i = 0; i < peliculas.length; i++) {
    console.log(peliculas[i]);
}


function arr2(arr) {

    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
arr2 (["hola", 2, 3, 4, "Adios"])



// reverse

// function reverse (str){
//     let result = []
//     for (i = str.length -1; i >=0; i--){
//         result.push(str[i])
//     }
//     return result.join('')
// }

// console.log(reverse('abdc'))

// Otro modo

// function reverse(str){
//     let result=''
//     for(i = str.length -1: i >=0; i--){
//         result += str[1]
//     }
//     return result
// }



// Array 4  Variable que recibe un array de numeros y devuelve la suma de los valores

function arrPrint(arr){
    let resultado = 0
    for(let i = 0; i<arr.length ; i++){
        resultado = resultado + arr[i]
    }
    console.log(resultado)
}
arrPrint([5,2,3,189])


// Array 5. recibe un array de numeros y devuelve el valor mas pequeño.

function arrnumb(arr){
    let menor = arr [0]
    for(let i = 0; i <= arr.length ; i++){
        if (arr [i] < menor){
            menor = arr[i]
            }
   }  
   console.log(menor)  
}
arrnumb([89,8,21,8923,341,41,7])

// Array 5*. recibe un array de numeros y devuelve el valor mas grande.

function arrnum(arr){
    let mayor = arr[0]
    for(i=0; i<arr.length; i++){
        if (arr[i] > mayor){
        mayor = arr[i]
        }
    }
    console.log(mayor)
}
arrnum([89,8,21,893,341,41,7])

// Bucle for of. devuelve los elementos uno a uno

let letters = ["a", "b", "c", "d"]
for(let letter of letters){
console.log(letter)
}


//Ejemplo para ver como funciona. for of

function aaaa(buclenuevo){
    for (let nuevo of buclenuevo){
        console.log(nuevo)
    }
}
aaaa(["aasd", "dab", "cdas", "dwd"])

//Ejemplo para ver como funciona. for of

function ttt(arguments) {
    for (let argument of arguments) {
      console.log(argument);
    }
  }
  ttt([1, 2876, "adios"])

 // Array 6. bucle for of recibir array de numeros y devolver el mas pequeño

function array6 (arr){
    let minimo = Infinity;
    for (let numero of arr){
        if ( numero < minimo){
            minimo = numero
        } 
    } 
    console.log(minimo);
}

array6 ([29,131,52,634,23,8,832])

// * Ejercicio extra-Longest Word.
// * Función que devuelve la palabra mas larga. Si hay dos iguales, devuelve la primera 

function getLongestWord (str){
    let words = str.split('')
    let longes = ""
    for (let word of words){
        if (word.length > getLongestWord.length) longest = word
    }
    return word
}


// Array sobre array. Nested array.

function sumaNested (arr){
    let resultado = 0
    for(let i = 0; i<arr.length ; i++){
        let fila = arr [i]
        for ( let i2=0; i2< fila.length; i2++){
            resultado = resultado + fila[i2]
        }
    }
    console.log(resultado)
}
sumaNested([[2, 2], [3, 4], [1, 1 ,1]])

// Array nested con for of

function sumaNestedForOf (arr){
    let resultado = 0;
    for (let numero of arr){
        let fila = numero
        for (let final of fila ){
            resultado = resultado + final
        }
    } 
    console.log(resultado);
}
sumaNestedForOf([[2, 2], [3, 4], [1, 1 ,1], [8, 5]])

// Objetos

// Objetos I

// let obj1 = {
//     "perro": {"nombre": "Ponchi", "raza":"A", "peso":20 },
    
// }
// console.log(obj1.perro.nombre)

// Objetos II

// let obj2 = {
//     "perro": {"nombre": "Ponchi" , "raza": "A" },
//     "peso": {"unidad": "kg" , "cantidad": "20" },
// }

// Objetos III

// let obj3 = {
//     "objeto1": {"nombre": "A", "precio": ""},
//     "objeto2": {"nombre": "B", "precio": ""},
//     "objeto3": {"nombre": "C", "precio": ""},
//     "objeto4": {"nombre": "D", "precio": ""},
//     "objeto5": {"nombre": "E", "precio": ""},
//     "objeto6": {"nombre": "F", "precio": ""},
// }

// Objetos IV. Recorre lista anterior y saca uno a uno.


// let obj4 = {
//     "objeto1": {"nombre": "A", "precio": ""},
//     "objeto2": {"nombre": "B", "precio": ""},
//     "objeto3": {"nombre": "C", "precio": ""},
//     "objeto4": {"nombre": "D", "precio": ""},
//     "objeto5": {"nombre": "E", "precio": ""},
//     "objeto6": {"nombre": "F", "precio": ""},
// }

// function compra (obj4){

// }



// console.log(datos.objetos)




// Objetos V

// let suma = 0
// for (let prod of lista){
//     suma = suma + prod.precio
// }

// console.log(prod)




// Ejercicio extra-Piramide
 
// function pyramid(N){
//     let len = N * 2 + 1
//     let blocks = 1
//     printLevel(blocks)
//     for(let i = 1; i <= N; i = i + 2){
//         blocks += 2
//         printLevel(blocks)
//     }
//     function printLevel(blocks){
//          let space =  (len - blocks) /2 
//          let level = (' '.repeat(space)) + ('#'.repeat(blocks)) + (' '.repeat(space))
//          console.log(level)
//     }
// }

// Manipulacion String I

// function manip1 (str){
//     let comprob = 0
//     if(str.length > comprob)
//         str.length = comprob
//         console.log(comprob)       
// }

// let prueba = "Hola"






// Teoria

// // O(1)

// function func(n){
//     console.log('hola')
// }

// // O(n)
// function func(n){
//     for(let el of n){
//         console.log(el)
//     }
// }

// // O(n2)
// function func(n){
//     for(let el of n){
//     console.log(el)
//     }
// }

// // O(2n)
// fib(n);
//     if n <= 1
//         return 1
// function func(n){
//     for(let el of n){

//     }
// // }
// Fin teoria


// Performance
// Podemos URLSearchParams, console.time

// console.time('for')
// let sum = 0
// let store = 0
// for ( let i = 0; i < 10000; i++){
//     if(i > 1){
//         store++
//     }else{
//         console.log(i)
//     }
//     sum += i
// }
// console.timeEnd('for)


// Type coercion

console.log("Type:")

let StrCoercion = "3 20 6 1"
let arr = StrCoercion.split(" ")

console.log(arr)

let suma = 0
for (numCoercion of arr){
    let x = parseInt(numCoercion)
    suma = suma + arr
}
console.log(suma)


// Extra. Esta en slack

let str = 'abdsdadadadbasd'
let arr3 = str.split('')
let obj = {}

for (let char of arr3){
    if (obj[char]){
        obj[char] += 1
    }else {
        obj[char] = 1
    }

}
let keys = Object.keys(obj)
let max = -Infinity
let letter = ''

for (let key of keys){
    if(obj[key] > max){
        max = obj[key]
        letter = key
    }
}

console.log(keys)

















