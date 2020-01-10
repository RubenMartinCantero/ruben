const func = require('./parser.js');

test('get.... give...',() =>{
    let prueba = new JSONParser ()
    prueba.getString("Lo que sea")

    expect(func.getString()).tobe("Lo que sea")
})
