
// class Shape {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }
// }

// class Rect extends Shape {
//     constructor(width, height) {
//         super(width, height) 
//     }
//     getarea () {
//        let area = (this.width * this.height)
//        return area
//     }
// }

// let rect1 = new Rect(10,30)
// let ar = rect1.getarea() 
// console.log(ar)

// class Triangle extends Shape {
//     constructor(width, height) {
//         super(width, height) 
//     }
//     getarea () {
//        let area = (this.width * this.height / 2)
//        return area
//     }
// }

// let tring1 = new Triangle(10,30)
// let tr =console.log( tring1.getarea() )

/* Ejercicio imagen y parrafo. Paso un texto y una imagen y me la implementa directamente en html */


class Node {
    constructor(image, parragraph) {
        this.imagen = document.createElement('img')
        this.parragraph = document.createElement("p"); 
    }
}
class Parraf extends Node {
    constructor(image, parragraph) {
        super(image, parragraph) 
    }
    gettext (textoIntroducido) {
        let parrafo = this.parragraph
        let texto = document.createTextNode(textoIntroducido);
        parrafo.appendChild(texto);
        document.body.appendChild(parrafo);
        return texto
    }
    getimg (imagenIntroducida) {
        let imagen = this.imagen
        let img = document.createTextNode(imagenIntroducida);
        imagen.setAttribute("src", imagenIntroducida);
        document.body.appendChild(imagen);
        return img
    }
}

let text1 = new Parraf()
text1.gettext('Introduce el texto que desees.')

// let img1 = new Parraf()
// img1.getimg("https://dam.ngenespanol.com/wp-content/uploads/2019/03/luna-colores-nuevo-770x395.png")

// let text2 = new Parraf()
// text2.gettext('Segundo texto introducido.')

// let img2 = new Parraf()
// img1.getimg("https://ichef.bbci.co.uk/news/976/cpsprodpb/F403/production/_109476426_jheison3.png")


// let parrafo = document.createElement('p');
// let texto = document.createTextNode('Parrafo añadido');
// parrafo.appendChild(texto);
// document.body.appendChild(parrafo);


// let imagen = document.createElement('img') 
// imagen.setAttribute("src","https://dam.ngenespanol.com/wp-content/uploads/2019/03/luna-colores-nuevo-770x395.png");
// document.body.appendChild(imagen);


/* Orientacion a objetos II, option que reciba un texto. Crear un menu */

/* Dos clases, menu y option. "this" es como un objeto que comparte toda la clase. */


class Option {
    constructor(text, func){
        this.text = text
        this.func = func
        
    }
    render(parent){
        if(parent === undefined) parent = document.body
        this.li = document.createElement('li')
        this.li.innerHTML = this.text
        this.li.onclick = this.func
        parent.append(this.li)
        // this.li.style.color = "red"
    }
    remove(){
        this.li.remove()
    }
 
}
/* Menu. Que guarde los valores en un array */
class Menu {
    constructor(){
        this.options = []
    }
    build(){
        this.ul = document.createElement('ul')
        document.body.append(this.ul)
    }
    addOption(text, func){
        let option = new Option(text, func)
        option.render(this.ul)
        this.options.push(option)}

    removeOption(index){
        this.options[index].remove()
        this.options.splice(index, 1)
    }
}

let menu = new Menu()
menu.build()
menu.addOption('1. Iniciar', () => console.log('hola'))
menu.addOption('2. Iniciar', () => console.log('hola'))
menu.addOption('3. Iniciar', () => console.log('hola'))
menu.addOption('4. Iniciar', () => console.log('hola'))
menu.addOption('5. Iniciar', () => console.log('hola'))
menu.removeOption(2)
menu.select()
let option = new Option() 
// option.select()


// let sidemenu = new Menu()
// sidemenu.build()

// document.addEventListener('keydown', function(event){
//     if(event.keyCode === 40){
//         let option = new Menu()
//         option.select()
//     }
// })

/* Clase option, añadir metodo select y unselect que devuelva. */


// class ItemBox extends ItemContainer{
//     constructor(capacity){

//     }
// }


// select(){
//     console.log('esta funcionando')
//     // this.li.style.color = "red"
// }
// unselect(){
//     this.li.style.color = "white"
// }

// select() {
//     console.log('esta funcionando')
    // this.li.style.color = "red"
}