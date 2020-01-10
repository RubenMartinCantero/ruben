

var elementos = document.getElementById("menu");
var btns = elementos.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var bordeActivo = document.getElementsByClassName("active");
        if (bordeActivo.length > 0){
            bordeActivo[0].className = bordeActivo[0].className.replace(" active", "");
        }
        this.className += " active";
    })
}