let pepe = {
    name: 'Pepe',
    age: 29,
    datos: function () {
        console.log(this.name + ' tiene ' + this.age + ' años.');
    }
}

pepe.datos()

let sandra = {
    name: 'Sandra',
    age: 52,
}

sandra.datos = pepe.datos;
sandra.datos()


