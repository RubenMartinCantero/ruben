
// document.onscroll = function(){
//     console.log('se ha hecho scroll')
//     barra()
//     }

//     function barra(){
//         let ammount = document.documentElement.scrollTop
//         let perc = 100 * ammount / document.body.scrollHeight
//         let cambio = document.getElementById("bloque")
//         console.log(perc)
//         if (perc > 50){
           
//             cambio.style.backgroundColor = "red"
            
//             } else {
//                 cambio.style.backgroundColor = "green"
//             }
// }



/* Sala polivlentes 1,2 y 3. */

/* Funciones sobre listas */

// map  // [2, 3, 4]

let list1 = [1, 2, 3]
let camb1 = list1.map(x => x + 1)
console.log(camb1)


/* [8, 12, 20] -> [4, 6, 10] */

let list2 = [8, 12, 20]
let camb2 = list2.map(x => x / 2)
console.log(camb2)

// [1, 7, 50] -> [“1”, “7”, “50”]

let list3 = [1, 7, 50]
let camb3 = list3.map()
console.log(camb3)