// let i = 25;
// let array = []
// console.log(array)
// for (let i = 0; i< 3; i++){
//     array.push(i)
// }
// console.log(array)

// console.log(i)

// for (let newArray of array) {
//     console.log(newArray)
// }


// // //ES5
// // (function () {
// //     var c = 3;
// // })();
// // console.log(c); //Da error, porque hay block scope, no esta definida.

// // //ES6
// // {
// //     const a = 3;
// //     let b = 2;
// //     var c = 4;
// // }
// // console.log(a +b); //Ni a ni b, al ser const y let, pueden salir del scope, da error.
// // console.log(c);


// //-------------------------- //Strings ES6 ------------------------------//


// let firstName = 'Ruben';
// let lastName = 'Martin';
// const yearOfBirth = 1990;

// function calcAge (year) {
//     return 2019 - year;
// }

// console.log(`This is ${firstName} ${lastName}. 
// He was born in ${yearOfBirth}. 
// Today, he is ${calcAge(yearOfBirth)} years old.`);  //Al ponerlo en lineas separadas se escribe en diferentes lineas
// //-------------------------- //differents methods strings ------------------------------//


// const n = `${firstName} ${lastName}`;

// console.log(n.startsWith('J'));
// console.log(n.startsWith('r'));
// console.log(n.startsWith('R'));
// console.log(n.endsWith('in'));
// console.log(n.includes('en'));
// console.log(`${firstName}
// `.repeat(3));


// //-------------------------- Arrow functions  ------------------------------//
// const years = [1990, 1965, 1982, 1937];

// let age6 = years.map(el => 2019 - el)
// console.log(age6)

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);
// console.log(age6)

// ages6 = years.map((el, index) => {
//     const now = new
//     Date ().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}.`
// });
// console.log(age6)

// //-------------------------- Arrow functions 2 ------------------------------//

// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
        
//         document.querySelector('.blue').addEventListener('click',() => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         })
//     }
// }
// box6.clickMe();


// // other example arrow function

// function Person(name) {
//     this.name = name;
// }

// let friends = ['Bob', 'Jane', 'Mark']

// Person.prototype.myFriends6 = function (friends) {
//     var arr = friends.map(el =>
//         `${this.name} is friends with ${el}`);
//     console.log(arr);
// }
// new Person('Mike').myFriends6(friends);


// //-------------------------Destructuring ---------------------------------//

// // let john = ['John', 26];
// // let name = john[0];
// // let age = john[1];
// // console.log (name,age)

// let [name, age] = ['Ruben', 29];
// console.log([name, age])
// console.log (name)
// console.log (age)

// //Con objetos

// let obj = {
//     firstName1: 'Ruben',
//     lastName1: 'Martin',
// }

// let {firstName1, lastName1} = obj;
// console.log(firstName1);
// console.log(lastName1);

// let { firstName1: a, lastName1: b} = obj;
// console.log(a, b);

// function calcAgeRetirement(year) {
//     let age = new
//     Date().getFullYear() - year;
//     return [age, 70 - age];
// }

// let [age2, retirement] = calcAgeRetirement(1990);
// console.log(age2)
// console.log(retirement)


// //-------------------------  Arrays  ---------------------------------//

// let boxes = document.querySelectorAll('.box');

// // let boxesArr6 = Array.from(boxes);
// // boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// // we could optimize this method

// let boxesArr6 = Array.from(boxes);

// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'blue');

// for (let a of boxesArr6) {
//     // if (a.className === 'box blue') {
//         //     continue;
//         // }
//         //Otra maner de escribirlo
//     if (a.className.includes('blue')) {
//         continue;
//     }
//         a.textContent = 'I changed to blue!'
// }

// /////////////////////////////////////////////////////////////////////////////////////////


// let ages = [12, 17, 82, 5, 32, 28, 7];

// // Con ES5
// // let full = ages.map(function(cur) {
// //     return cur >=18;
// // });
// // console.log(full)

// // console.log(full.indexOf(true));
// // console.log(ages[full.indexOf(true)]);


// // Con ES6 sería de la siguiente manera, mucho mas sencilla. Busca el primer numero que sea mayor o igual que 25
// // dentro del array ages, el findIndex te indica la posicion del array y fin te encuentra el valor.

// console.log(ages.findIndex(cur => cur >= 25));
// console.log(ages.find(cur => cur >=1));


// // Spread operator

// function addFourAges (a, b, c, d) {
//     return a + b + c + d;
// }
// let sum1 = addFourAges(18, 30, 4, 21);
// console.log(sum1)

// //Suma de numeros, ya que la funcion addFourAges suma 4 parámetros, por lo que solo va a sumar los 4 primeros
// let numbers = [1, 1, 1, 1, 1, 1, 1, 1]
// let sum3 = addFourAges(...numbers);
// console.log(sum3)

// //variables con strings


// //Añade los dos arrays en uno solo.
// let familySmith = ['John', 'Jane', 'Mark'];
// let familyMiller = ['Mary', 'Bob', 'Ann'];
// let bigFamily = [...familySmith, ...familyMiller];
// console.log(bigFamily)

// //Cambiar del parametro que deseemos, con queryselectro seleccionamos h1 o div o lo que sea
// // y con selectorALl seleccionamos todas las clases que tengan "en este caso" class = box
// let h = document.querySelector('h1');
// let boxes1 = document.querySelectorAll('.box');
// let all = [h, ...boxes1];

// //convert to an Array
// // Array.from(all)
// // console.log(all)
//  Array.from(all).forEach(cur => cur.style.color = 'red') //Cambia el color de las letras, todo los h1


//  //////////-------------------------- DEFAULT PARAMETERS -------------------------------//////////

// // function SmithPerson (firstName2, yearOfBirth2, lastName2, nationality){

// //     lastName2 === undefined ? lastName2 = 'Smith': lastName2 = lastName2;
// //     nationality === undefined ? nationality = 'american': nationality = nationality;

// //     this.firstName2 = firstName2;
// //     this.yearOfBirth2 = yearOfBirth2;
// //     this.lastName2 = lastName2;
// //     this.nationality =nationality
// // }

// // let john = new SmithPerson ('John', 1990)
// // console.log(john)

// // let emily = new SmithPerson ('Emily', 1983, 'Diaz', 'Spanish')
// // console.log(emily)


// //Lo mismo que antes, pero en ES6, se añade directamente a la funcion.

// function SmithPerson (firstName2, yearOfBirth2, lastName2= 'Smith', nationality= 'american'){
//     this.firstName2 = firstName2;
//     this.lastName2 = lastName2;
//     this.yearOfBirth2 = yearOfBirth2;
//     this.nationality =nationality
// }

// let john = new SmithPerson ('John', 1990)
// console.log(john)

// let emily = new SmithPerson ('Emily', 1983, 'Diaz', 'Spanish')
// console.log(emily)

//-------------------------------- MAPS ---------------------------------------//

// let question = new Map();
// question.set('question','What is the official name of the lateste major JavaScript version?');
// question.set(1,'ES5');
// question.set(2,'ES6');
// question.set(3,'ES2015');
// question.set(4,'ES7');
// question.set('correct',3);
// question.set(true,'Correct answer :D');
// question.set(false,'Wrong, please try again!');

// console.log(question)

// let questionnaire = question.get('question')
// console.log(questionnaire)
// // console.log(question.size)


// // if(question.has(4)) {
// //     // question.delete(4); //Eliminar una pregunta.
// //     console.log('answer 4 is here')
// // }

// // set, get, has, delete and clear son los mas usados.

// //Aplicamos un loop, para recorrer todas las preguntas.

// // question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));
// //Se puede hacer en vez de con forEach con un bucle for of, con .entries le pasas clave valor de question.
// // for (let [key, value] of question.entries()) {
// //     console.log(`This is ${key}, and it's set to ${value}`);
// // }

// //ahora en vez de imprimir todas las preguntas, tan solo las preguntas.

// for (let [key, value] of question.entries()) {
//     if (typeof(key) === 'number') {
//         console.log(`Answer ${key}: ${value}`);
//     }
// }
// //Con parseInt convierte el texto en numero
// //let ans = parseInt(prompt('Write the correct answer')); 
// //console.log(question.get(ans === question.get('correct')));



//-------------------------------- CLASSES (syntaxis sugar)---------------------------------------//
  
// class Person6 {
//     constructor(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     } 

//     calculateAge () {
//         let age = new Date().getFullYear - this.yearOfBirth;
//         console.log(age);
//     }

//     static greeting() {
//         console.log('Hey there!')
//     }
// }
// let john6 = new Person6('John', 1990, 'teacher'); //Hacemos una instancia de la clase.
// console.log(john6);

// Person6.greeting(); //Clase estatica. No se pueden llamar desde john6

// // se pueden agregar metodos a las clases, pero no propiedades.


//-------------------------------- CLASSES with subclasses ---------------------------------------//

// class Person6 {
//     constructor(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     } 

//     calculateAge () {
//         let age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }

//     static greeting() {
//         console.log('Hey there!')
//     }
// }

// //Creamos una subclase, que tiene como superclass a Person
// class Athlete6 extends Person6 {
//     constructor(name, yearOfBirth, job, olympicGames, medals) {
//         super(name, yearOfBirth, job)
//         this.olympicGames = olympicGames;
//         this.medals = medals;
//     }

//     wonMedal() {
//         this.medals++;
//         console.log(this.medals);
//     }
// }

// let johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

// johnAthlete6.wonMedal();
// johnAthlete6.calculateAge();



////--------------------------- EJERCICIO SECTION 7 -----------------------------------------///

/*
Encargado de:
    Parques --> hay 3
    Calles --> hay 4
    Ambos tienen nombre y año de construccion

Informe de:
    1. Densidad de arboles de cada parque. Formula: arboles/area de parque
    2. Edad media de cada parque de la ciudad. Formula: sumar edades / numero de parques
    3. Nombre del parque que tiene mas de 1000 arboles.
    4. Calculo total y la media de la longitud de las calles de la ciudad.
    5. Clasificacion por tamaño de todas las calles(tiny,small,normal,big,huge). Si es unknown aplicar normal
    
El informe debe de ser recogido en la consola.
*/

// class Element {
//     constructor(name, buildYear){
//         this.name = name;
//         this.buildYear = buildYear
//     }
// }

// class Park extends Element {
//     constructor (name, buildYear, area, numTrees){
//         super(name, buildYear)
//         this.area = area;
//         this.numTrees = numTrees;
//     }

//     treeDensity () {
//         let density = this.numTrees / this.area;
//         console.log(`${this.name} has a tree density of ${density} trees per square km.`)
//     }

// }

// class Street extends Element {
//     constructor (name, buildYear, length, size = 3){ //size = 3 nos indica que si no esta definida asigne la 3. normal
//         super(name, buildYear);
//         this.length = length;
//         this.size = size;
//     }

//     classifyStreet () {
//         let classification = new Map();
//         classification.set(1, 'tiny');
//         classification.set(2, 'small');
//         classification.set(3, 'normal');
//         classification.set(4, 'big');
//         classification.set(5, 'huge');

//         console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`)
//     }
// }

// //Objetos con los datos de los parques y las calles.
// let allParks = [
//     new Park('Green Park', 1987, 0.2, 215),
//     new Park ('National Park', 1894, 2.9, 3541),
//     new Park('Oak Park', 1953, 0.4, 949)
// ];

// let allStreets = [
//     new Street('Ocean Avenue', 1999, 1.1, 4),
//     new Street('Evergreen Street', 2008, 2.7, 2),
//     new Street('4th Street', 2015, 0.8),
//     new Street('Sunset Boulevard', 1982, 2.5, 5),
// ];

// // definimos las funciones que nos van a devolver los informes, para el parque y para las calles.
// function calc(arr) {
//     let sum = arr.reduce ((prev, curr, index) => prev + curr, 0);  //Reduce repetidas veces con el valor anterior
//     // console.log(sum)
//     return [sum, sum / arr.length]
// }

// function reportParks(p) {
//     console.log('----Parks reprot----')

//     //Density
//     for (let prueba of p){
//         prueba.treeDensity()
//     }
//     // p.forEach(el => el.treeDensity());

//     //Average trees per park
//     let sum = 0;
//     for (let a of p){
//         sum = sum + a.numTrees
//     }
//     let numParks = p.length;
//     AverageAge = sum / numParks
//     console.log(`There are ${AverageAge} trees per park.`)

//     //Average age
//     let ages = p.map(el => new Date().getFullYear() - el.buildYear);
//     let [totalAge, avAge] = calc(ages);
//     console.log(`Our ${p.length} parks have and average of ${avAge} years`)
      
//     //Which park has more than 1000 trees

//     for (let a of p) {
//         if (a.numTrees >= 1000){
//             console.log(`The ${a.name} has more than 1000 trees, it has exactly ${a.numTrees}`)
//         }
//     }
//     //Otra forma de hacer +1000trees
//     // let i = p.map( el => el.numTrees).findIndex(el => el >= 1000); 
//     // console.log(`The park ${p[i].name} has more than 1000 trees`)
    
// }
// reportParks(allParks);

// function reportStreets(s) {
//     console.log('----Streets reprot----')

//     // length streets, total and average
//     let sum = 0
//     for (let a of s){
//         sum = sum + a.length
//         console.log(`The street ${a.name} has ${a.length} meters`)
//     } console.log(sum)

//     let [totalLenght, avLength] = calc(s.map(el => el.length));
//     console.log(`Our ${s.length} streets have a total length of ${totalLenght} km, with and average of ${avLength}`)

//     // Street classification.
//     s.forEach(el => el.classifyStreet());

// }
// reportStreets(allStreets);


// let productos = [
//     {nombre: 'television', marca: 'siemmens', precio:399, tamaño: 'grande'},                        
//     {nombre: 'television', marca: 'siemmens', precio:1200, tamaño: 'grande'},
//     {nombre: 'television', marca: 'siemmens', precio:280, tamaño: 'grande'},                    
//     {nombre: 'television', marca: 'siemmens', precio:670, tamaño: 'grande'},                    
//     {nombre: 'radio'},
// ]

// let prueba = productos.find( item => {
//     return item.nombre === 'television'
    
// })

// console.log(prueba)

// // MAP ejecuta una sentencia o metodo sobre cada uno de los elementos del array.

// // Nos devuelve un array con los nuevos objetos generados.

// //item--> es una funcino anónima, cuyos parametros de esa funcion anonima es cada elementos del array que le damos.
// let productosIva = productos.map(item => {
//     item.precio = item.precio + item.precio * 0.21 
//     return item
// })
// console.log(productosIva)
// console.log(productos)

// // De esta manera se esta sobreescribiendo los datos, el array productos cambia tras aplicar map, lo sobreescribe.

// //De la siguiente manera, crearemos un nuevo array con los datos nuevos, sin sobreescribir los iniciales.


// let productos2 = [
//     {nombre: 'television', marca: 'siemmens', precio: 399, departamento: 'hogar'},                        
//     {nombre: 'television', marca: 'otra', precio: 1200, departamento: 'tecnología'},
//     {nombre: 'television', marca: 'nueva', precio: 80, departamento: 'hogar'},                    
//     {nombre: 'television', marca: 'vieja', precio: 670, departamento: 'hogar'},                    
// ]


// let productos2Iva = productos2.map(item => {
//     let newPrecio = item.precio + item.precio * 0.21;
//     return {...item, precio: newPrecio}
// })

// console.log(productos2)  //Array sin iva
// console.log(productos2Iva) //Array con iva

// //Tengo un array de objetos, puedo modificar como desee uno de sus valores y sobreescribirlo o 
// // añadirlo en otro array nuevo.

// //Filter. Creo un nuevo array, si me devuelve true entra dentro del nuevo array. Se filtra en función de lo que desee.

// // let productosHogar = productos2.filter(item => item.departamento === 'hogar')  //filter en una sola linea 

// let productosHogar = productos2.filter(item => {
//     return item.departamento === 'hogar'  //todo lo que tenga el array departamento: 'hogar' es true.
// })

// console.log(productosHogar) //No sobreescribe, crea un nuevo array filtrado.


// //Every. Mira si todos los elementos del array cumplen esa condicion devolviendo TRUE o si no, devolviendo FALSE
// //Debe cumplirse esa condicion para todos, si algun objeto del array no tiene esa clave valor, saldra false siempre
// // aunque el resto lo cumpla, ya que ese objeto, no lo cumple

// //Comprobamos si el precio es mayor o igual a 100 en todos los productos 
// let check = productos2.every(item => {
//     return item.precio >= 80 
// })
// console.log(check)


// //Some. Si alguno cumple la condicion especificada, devuelve true, si ninguno cumple, false.

// let check2 = productos2.some(item => {
//     return item.precio >= 5000
// })
// console.log(check2)

// //Redue. Suma de elementos dentro de un array.
// //Este metodo, recibe una funcion anonima, total, que es lo que voy sumando y el item que es cada elemento.
// //Al final del todo hay que especificar el valor inicial de la suma.
// let precioTotal = productos2.reduce((total, item) => {
//     return total + item.precio
// }, 0)

// console.log(precioTotal)

// let prueba2 = productos2.reduce((total, item) => {
//     return total + ' ' + item.marca
// }, '')

// console.log(prueba2)

// //Combinacino de filter y map

// let num1 = [13, 2, -4, 42, -9];

// //De manera separada queda así
// let filtered = num1.filter(item => {
//     return item >=0
// })
// console.log(filtered)

// let itmes1 = filtered.map(item => ({value: item}) );
// console.log(itmes1)

// //Juntando ambos metodos, ya que no hace falta crear una variable con el resultado para llamarla.

// let items2 = num1
//     .filter(item => item >= 0)
//     .map(item => ({value: item}))

// console.log(items2)

// //Otra forma de ponerlo todo junto, en vez de en una linea, en varias si el filter o el map son mas complejos.
// let items3 = num1
//     .filter(item => {
//         return item >= 0
//     })
//     .map(item => {
//         return item + 5
//     })
    
// console.log(items3)



// Asynchronous and promises


// let getIDs = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve([24, 523, 93, 132, 4]);
//     }, 1500);
// });

// let getRecipe = recID => {
//     return new Promise((resolve, reject) => {
//         setTimeout(ID => {
//             let recipe = 
//             {title:'Fresh tomato pasta', publisher:'Jonas'};
//             resolve(`${ID}: ${recipe.title}`)
//         }, 1500, recID)
//     });
// }

// let getRelated = publisher => {
//     return new Promise((resolve,reject)=> {
//         setTimeout(pub => {
//             let recipe = 
//             {title:'Italian pizza', publisher:'Jonas'}
//             resolve(`${pub}: ${recipe.title}`)
//         },1500,publisher)
//     })
// };

// getIDs
// .then(IDs => {
//     console.log(IDs)
//     return getRecipe(IDs[2])
// })
// .then(recipe => {
//     console.log(recipe);
//     return getRelated('Jonas');
// })
// .then (recipe => {
//     console.log(recipe)
// })
// .catch(error => {
//     console.log('Error!!')
// });

// Otra forma de ordenar los .then .then . then.... .catch creando una funcion asincronica con await.

// async function getRecipeAW() {
//     let IDs = await getIDs
//     console.log(IDs);
//     let recipe = await getRecipe(IDs[2]);
//     console.log(recipe);
//     let related = await getRelated('Jonas Smith');
//     console.log(related);

//     return recipe
// }
// getRecipeAW().then(result => console.log(`${result} is the best ever`));


///////////////////----------------------- AJAX and APIS ---------------------------////////////////////////////////

// function getWeather(woeid){
//     fetch('https://crossorigin.me/https://www.metaweather.com/api/location/{woeid}/')
//     .then(result => {
//         console.log(result);
//         return result.json();
//     })
//     .then(data => {
//         let today = data.consolidated_weather[0];
//         console.log(`Temperatures in ${data.title} stay between {today.min_temp} and {today.max_temp}.`)
//         return result.json();
//     })
//     .catch(error => console.log(error));
    
// }
// getWeather(2487956)
// getWeather(44418) //Este numero indica desde la api la ciudad a la que accedemos para ver el tiempo



///////-------------------- lo mismo pero con asyn function

// async function getWeatherAW(woeid) {  //Esto se ejecuta en segundo plano.
//     try {
    //     let result = await fetch ('https://crossorigin.me/https://www.metaweather.com/api/location/{woeid}/')
    //     let data = await result.json(); 
    //     let tomorrow = data.consolidated_weather[1];
    //     console.log(`Temperatures tomorrow in ${data.title} stay between {tomorrow.min_temp} and {tomorrow.max_temp}.`);
    //     return data;
//     }catch(error) {
//         alert(error);
//     }
// }
// getWeather(2487956)
// let dataLondon;
// getWeatherAW(44418).then(data => {
//    dataLondon = data 
//    console.log(dataLondon);
//});
// getWeather(44418) //Este numero indica desde la api la ciudad a la que accedemos para ver el tiempo
