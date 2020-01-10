/* Ejercicio template string I */


// let saludo = nombre => `Hola ${nombre}`;
// console.log( saludo('div') ); 


// let error = 404
// let message = "Page not found"
// let str = `Error ${error}: ${message}`
// console.log(str) // Error 404: Page not found


// let date = new Date('01 Jan 1970 00:00:00 GMT')
// let dateSet = 0
// setInterval (function contador() {
//     console.log(date)
//     date = date + 1
// }, 1000);



/* Ejercicio string template (extra) */

// function listArray(arr){
//     let last = arr.pop()
//     return `$(arr) y $(last)`
// }
// console.log(listArray([1, 2, 3]))



/* Arrow function----syntax sugar */

/* Destructuring */


// let [a, b] = [10, 20]
// console.log(a)
// console.log(b) 

// let [a, b, ...rest] = [10, 20, 30, 40, 50]
// console.log(a) // 10
// console.log(b) // 20
// console.log(rest) // [30, 40, 50]


// const { uno, dos } = { uno: 1, dos: 2 }
// console.log(uno)
// console.log(dos)

// const { x, y } = { x: 1, y: 2 }
// console.log(x, y) // 10, 20



/* Cambio de variables, intercambio de a por b */

// let a = 1
// let b = 2
// ;[a,b]=[b , a]
// console.log(a, b) 

// “2 1”

/* Desestructuracion II */


// const { x: { y } } = { x: { y: 10 } }

// console.log(y)

// const { x: equis, y: igriega } = { x: 10, y: 20 }
// console.log(igriega)



// const { uno: 1, lista: [2, 3], cuatro: 4, x: { cinco: 5 } } = {uno: 1, [dos,tres]=[lista:[2,3]], cuatro: 4, cinco: 5}

// console.log(uno, dos, tres, cuatro, cinco)


// function consoleLogEverything(...things) {
//     let minimo = Infinity
//     for (let thing of things) {
//         if ( thing < minimo)
//         minimo = thing
        
//     }console.log(minimo)
// }

// consoleLogEverything(16,28, 34, 7, 623)


/* Clausura */


// function parent(num1){
//     return function child(num2){
//         return num1 + num2
//     }
// }
// let child = parent (7)
// console.log("la suma es: " + (child(12)))


/* Clausura II */



/* Ejercicio map transformaciones */

// map [8, 12, 20] -> [4, 6, 10]

// let array = [8, 12, 20]
// let newArray = array.map(x => x / 2) 

// console.log(array)
// console.log(newArray)

// map [1, 7, 50] -> [“1”, “7”, “50”]

// let array2 = [1, 7, 50]
// let newArray2 = array2.map(x => x + '') 

// console.log(array2)
// console.log(newArray2)



/* map [-2, 5, 15, -7, -8] -> [“-”, “+”, “+”, “-”, “-”] */

// let array3 = [-2, 5, 15, -7, -8]
// let newArray3 = array3.map(x =>{
//     if (x >= 0){
//         return "+"
//     }else
//     return "-"
// }) 

// console.log(newArray3)


/* map [“lorem ipsum dolor”, “hello world”] -> [“lid”, “hw”] */
/* Separar el string en array y manejarlo */


// let arr = ['lorem ipsum dolor', 'hello world']

// let result = arr.map(x =>{
//     let output = x.split('')
//     output = output.map(word => word[0])
//     output = output.join('')
//     return output
// })

// console.log(result)

// let result = arr.map ( x => x.split('').map(word => word [0]).join('')
// })



// map  [[1, 2], [34, 20], [11, 11]] -> [3, 54, 22]

// let arr = [[1, 2], [34, 20], [11, 11]]
// let result = arr.map(x => {
//     let suma = x.reduce((acc, x) => acc + x)
//     console.log(suma)
//     return suma
// })

// console.log(result)





// let array = [1, 2, 2, 2]
// let resultado = array.reduce((acc, x) => acc + x )

// console.log(resultado)

/* Filter devuelve true o false, si la funcino devuelve true permanece y si es false desaparece */

/* Saca números pares */

// let lista = [20, 10, 5, 2, 7, 8]
// let newLista = lista.filter(x => x % 2 === 0 )
// console.log(newLista)


/* Reduce. Saca el valor acumulado, mas el valor inicial. 
    En la siguiente iteracción, el acumulado se mantiene y se suma al inicial  */


/* La suma de todos los elementos. */


// let lista2 = [1, 2, 3, 4]
// let newLista2 = lista2.reduce((acc, x) => acc + x, 0)
// console.log(newLista2)


// let lista3 = [1, 2, 3, 4]
// let newLista3 = lista3.reduce((acc, x) => acc + x , '')
// console.log(newLista3)



/* PROMESAS */

/* 
new Promise((resolve, reject) => {
    console.log('uno')
    setTimeout(() => resolve(), 1000)
})

Recibe dos funciones, resolve y reject, en cuanto llamamos a resolve se termina

resolve y reject pueden llamarse como quieras, pero se tiende a usar esas.

*/

// let promise = new Promise ((resolve, reject) =>{
//     setTimeout(() => {
//         console.log('he acabado')
//         resolve() /* Sin este resolve, el .then no actúa, no se ejecuta */
//     }, 1000);
// })

// promise.then (result => {
//     console.log('La promesa ha terminado')
// })

// promise.then (result => {
//     console.log('lorem ipsum')
// })

// promise.then(result => {
//     console.log(result)
// })

/* Podemos conectarnos a est promesa desde donde queramos y cuantas veces queramos. Se puede exportar incluso.
y con .then ejecutar el código. */

/* REject representa que las cosas han ido mal. Con CATCH se muestra un erro en la consola. 
    No se pueden ejecutar ambas a la vez, o THEN o CATCH
*/

// fetch(url)
//     .then(result => console.log(result))
//     .catch(err => console.log('no he podido bajarme el fichero.'))

/* Si la promesa se resuelve, imprime cruz, si se rechaza imprime cara. */


// function throwOneCoin(){
//     return new Promise ((resolve, reject) => {
//         let rand = Math.random()
//         if (rand > 0.5) resolve()
//         else reject()
//     }).then((result) => {
//         console.log('cruz')
//     }).catch((result) =>{
//         console.log('cara')
//     })
// };

// throwOneCoin()


/*
Para levantar un servidor
para instalar en todos los archivos
npm install -g lite-server 

Ir a la carpeta con algun .html y escribir en la consola:
 lite-server

 Se debe abrir la pagina con todo montado, si no, escribir en el buscador:
localhost:3000

*/


/* Seguimos con promesas. API interfaz de programación. */

// fetch("https://pokeapi.co/api/v2/pokemon/ditto/").then(response => {
//     console.log(response.status),
//     response.json()
//         .then(data => {
//             console.log(data)
//         })
// })

/* Boton y al pulsar que busque los pokemon con el nombre indicado. */




  function pulsar(){
      let name = document.querySelector('#pokemonName').value
      console.log(name)
        fetch("https://pokeapi.co/api/v2/pokemon/" + name).then(response => {
        console.log(response.status),
        response.json()
            .then(data => {
             
                let arr = Object.values(data.sprites)
                // console.log(arr)
                // var arr2 = arr.splice(4, arr.lenght);
                // console.log(arr2)
                let arr2 = arr.slice(4, arr.lenght);
                // console.log(arr2)

                for( var i = arr2.length; i--;){
                    if ( arr2[i] === 'foo') arr2.splice(i, 1);
                    console.log('AQUI   ' + arr2)
                    }
                
                // var arr3 = arr2.splice('null');
                // console.log('Aqui:    '+ arr3)
                
                for (let elements of arr2) { 
                    // console.log('Aqui: ' + elements)
                    let img = document.createElement("img");
                    img.src = elements;
                    let src = document.getElementById("box");
                    src.appendChild(img);

                  } 
             
            })
    })
}



git checkout -b entrega_ruben-martin-cantero

git add .



// Otro ejemplo. 

// let proto = {c: 3}
// let obj = Object.create(proto)
// obj.a = 1
// obj.b = 'Hola'
// console.log(obj.a, obj.b, obj.c) //1, 'Hola', 3.


/* Pasas una url y te pasa un array de promesas. */

let urls = []
for(let i = 4; i <= 9; i++){ urls.push('https://swapi.co/api/people/' + i)}

const getData = url => fetch(url).then(response => response.json())

const promises = urls.map(url => getData(url))

Promise.all(promises).then(results => {
    console.log(results.reduce((acc, data) => acc + parseFloat(data.height), 0) / 5) /* Esto lo suma*/
})

/* Programación funcional. */

 