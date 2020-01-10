// sum.test.js
const func = require('./utils.js');

test('adds 1 + 2 to equal 3', () => {
    expect(func.sum(1, 2)).toBe(3)
});

test('get [3, 4, 1] give [3]', () => {
    expect(func.getFirst([3, 4, 1])).toBe(3)
});

test('get [3, 4, 1] give [4,5,2]', () => {
    expect(func.map([3, 4, 1],(x => x + 1)) ).toEqual([4,5,2])
});


test('get datos={"edad": 29} give 29', () => {
    let datos = {"edad": 29}
     expect(func.assoc("edad", 29, datos)).toEqual({"edad": 29})
});

test('get [[2,4],[4,6]] give [2,4,4,6] ', () =>{
    let arr = [[2,4],[4,6], [4 ,5, 6]]
    expect(func.concat(arr)).toEqual([2,4,4,6, 4, 5, 6])
});
