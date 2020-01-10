  // File with utility functions


//@TODO: needs test
function sum(a: number, b: number): number{
    return a + b
}

//@TODO: needs test
function getFirst(arr: any[]): any[]{
    return arr[0]
}

//@TODO: needs test
function map(array: any[], fn: (a: any) => any){
    return array.map(fn)
}
/* Diferentes formas de hacer el map de arriba */
// function map(array: any[], fn: (x: any) => any){
//     return array.map(fn)
// }

// function map(array: any[], fn: (... args: any) => any){
//     return array.map(fn)
// }

//@TODO: needs test
function assoc(property: string, value:any, obj: object){
    obj[property] = value
    return obj
}

//@TODO: needs test
function concat([head, ...tail]){
    return head.concat(...tail)
}

module.exports = {sum, getFirst, map, assoc, concat}
