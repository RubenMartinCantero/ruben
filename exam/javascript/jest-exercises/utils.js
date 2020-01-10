// File with utility functions


//@TODO: needs test
function sum(a, b){
    return a + b
}

//@TODO: needs test
function getFirst(arr){
    return arr[0]
}

//@TODO: needs test
function map(array, fn){
    return array.map(fn)
}

//@TODO: needs test
function assoc(property, value, obj){
    obj[property] = value
    return obj
}

//@TODO: needs test
function concat([head, ...tail]){
    return head.concat(...tail)
}

module.exports = {sum, getFirst, map, assoc, concat}
