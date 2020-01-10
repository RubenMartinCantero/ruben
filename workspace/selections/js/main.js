
/* ROjo */

// let eliminar = document.querySelector('.bad-rect');

// eliminar.parentNode.removeChild(eliminar);

// let eliminar3 = document.querySelector('.bad-rect');

// eliminar3.parentNode.removeChild(eliminar3);

// let eliminar2 = document.querySelector('#circle1');

// eliminar2.parentNode.removeChild(eliminar2);

 /* Rojo con bucle */

 /* Selection */

//  let circle = document.querySelectorAll('#circle2')
//  let rects = [...document.querySelectorAll('.bad-rect')] 
 
 /* Los puntos porque es una lista!! */

 /* remove */

//  circle.remove()
//  for(let rect of rects){
//      rect.remove()
//  }

/* Verde */

// let eliminar4 = document.getElementById('#circle2');

// eliminar4.parentNode.removeChild(eliminar4);


/* Crear enlace a y enlazarlo a un documento. */

let enlace1 = document.createElement("a");

enlace1.setAttribute("href", "https://www.google.com");

let enlace1Padre = document.querySelector("#enlace");

enlace1Padre.appendChild(enlace1);

enlace1.innerHTML = 'Pincha aqui.' 


/*  Crer un div que contenga un texto el color rojo. */

let div1 = document.createElement("div");

document.body.appendChild(div1);

let parrafo1 = document.createElement("p");

parrafo1.setAttribute("style", "width: 200px; background-color: red;"); 


div1.appendChild(parrafo1);

parrafo1.innerHTML = 'Color';

let select1 = document.createElement("select")

div1.appendChild(select1);

let option1 = document.createElement("option")
let option2 = document.createElement("option")
let option3 = document.createElement("option")
let option4 = document.createElement("option")
let option5 = document.createElement("option")

select1.appendChild(option1);
select1.appendChild(option2);
select1.appendChild(option3);
select1.appendChild(option4);
select1.appendChild(option5);

option1.innerHTML = 'Rojo.' 
option2.innerHTML = 'Azul.' 
option3.innerHTML = 'Verde.' 
option4.innerHTML = 'Naranja.' 
option5.innerHTML = 'Negro.' 


/* Miercoles 13 */

/* Ejercicio EVent listeners I */

let div2 = document.createElement("div");

document.body.appendChild(div2);


let parrafo2 = document.createElement("p");


parrafo2.innerHTML = 'NO PINCHES AQI';

div2.appendChild(parrafo2);

parrafo2.addEventListener('click', clickCallback)

function clickCallback(event){
    console.log('has pulsado el boton' )
    }

/* Ejercicio EVent listeners II */

let div3 = document.createElement("div");

document.body.appendChild(div3);


let parrafo3 = document.createElement("p");


parrafo3.innerHTML = 'Cambio de color del texto.';

div3.appendChild(parrafo3);


parrafo3.addEventListener('mouseover', overChangeColor)

function overChangeColor(event){
    parrafo3.setAttribute("style", "color: red;");
    }

parrafo3.removeEventListener('mouseout', overChangeColor)






/* Ejercicios event object I */

let div4 = document.createElement("div");
document.body.appendChild(div4);
div4.setAttribute("id", "div4;");
div4.setAttribute("style", "width: 200px; background-color: green; height: 200px;");

div4.onclick = clickHandler

function clickHandler(event){
console.log("El id tiene como nombre: " + event.target.id)
}


let div5 = document.createElement("div");
document.body.appendChild(div5);
div5.setAttribute("id", "div5");
div5.setAttribute("style", "width: 200px; background-color: red; height: 200px;");

div5.onclick = clickHandler
function clickHandler(event){
console.log("El id tiene como nombre: " + event.target.id)
}


let div6 = document.createElement("div");
document.body.appendChild(div6);
div6.setAttribute("style", "width: 200px; background-color: blue; height: 200px;");
div6.setAttribute("id", "div6");

div6.onclick = clickHandler
function clickHandler(event){
console.log("El id tiene como nombre: " + event.target.id)
}


/* Ejercicios event object II */

let div7 = document.createElement("div");
document.body.appendChild(div7);

let select2 = document.createElement("select")
div7.appendChild(select2);

let option6 = document.createElement("option")
let option7 = document.createElement("option")
let option8 = document.createElement("option")
let option9 = document.createElement("option")
let option10 = document.createElement("option")

select2.appendChild(option6);
select2.appendChild(option7);
select2.appendChild(option8);
select2.appendChild(option9);
select2.appendChild(option10);

option6.innerHTML = 'Rojo.' 
option7.innerHTML = 'Azul.' 
option8.innerHTML = 'Verde.' 
option9.innerHTML = 'Naranja.' 
option10.innerHTML = 'Negro.' 



option6.setAttribute("id", "prueba;");

option6.addEventListener('click', click1)

function click1(event){
    console.log(click1)
    option6.setAttribute("value", "color: red;");
}


let div8 = document.createElement("div");
document.body.appendChild(div8);
div8.setAttribute("style", "width: 800px; height: 200px;");


