let x = document.getElementById('presionar');
let  y = document.getElementById('texto');
let z = document.getElementById('fondo');
let click = true
function clickear() {
    let colorArray = ["pink", "yellow"]
    let backcolorArray = ['grey', 'brown']
    let textArray=['Cambiar a texto amarillo y fondo marron', 'Cambiar a texto rosa y fondo gris']
    x.innerHTML = click ? textArray[0] : textArray[1];
    y.style.color = click ? colorArray[0] : colorArray[1];
    z.style.backgroundColor = click ? backcolorArray[0] : backcolorArray[1];
    click = click ? false : true;
}

let backcolorArray = ['orange', 'green', 'red']
function clickear1() {
    z.style.backgroundColor = backcolorArray[0]
}
function clickear2() {
    z.style.backgroundColor = backcolorArray[1]
}
function clickear3() {
    z.style.backgroundColor = backcolorArray[2]
}




/* --------------------------------------------------------------- */

let budgetControler = ( function(){
    let x = 23
    console.log(x)
})();



let UIController = (function(){

    let DOMstrings = {  /* Se crea este objeto para poner todos los DOM y no repetirlos por todos lados. */
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function () {
            return { /* Devolver un objeto, para no hacer varias devoluciones seguidas y ahorrar codigo. */
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },
        getDOMstrings: function () { /* Exporto el DOMstring para poder usarlo en otros sitios */
            return DOMstrings;
        }
    }

})();

let controller = (function(budgetCtrl, UICtrl){

    let DOM = UICtrl.getDOMstrings (); /* Para poder usar el DOMstring que he declarado arriba */

    let ctrlAddItem = function () {

        //1. Get the field input data
        let input = UICtrl.getInput();
        console.log(input);



    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', function(event){
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem
        }
    })

})(budgetControler,UIController);

