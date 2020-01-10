let budgetControler = ( function(){
    let x = 23
})();



let UIController = (function(){

    return {
        getinput: function () {
            let type = document.querySelector('.add__type').value;
        }
    }

})();



let controller = (function(budgetCtrl, UICtrl){

    let ctrlAddItem = function () {

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', function(event){
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem
        }
    })

})(budgetControler,UIController);

