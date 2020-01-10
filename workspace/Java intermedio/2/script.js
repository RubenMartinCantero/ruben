


// let num = 20;
// function func() {
//     console.log(this.num) 
// }
// func()


let array = [[2, 2], [3, 4], [1, 1 ,1]]


function arrsum (arrayf)
{
let suma = 0
for (let arr of arrayf){
    for (arr2 of arr) {
        suma = suma + arr2
    }
}
return(suma)
}

if (arrsum (array) == 14){
    console.log('el numero es correcto')
} else {
    console.log('incorrecto')
}

