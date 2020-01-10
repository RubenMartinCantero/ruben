

var elementos = document.getElementById("menu");
var botones = elementos.getElementsByClassName("boton");
for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function () {
        var bordeActivo = document.getElementsByClassName("active");
        if (bordeActivo.length > 0){
            bordeActivo[0].className = bordeActivo[0].className.replace(" active", "");
        }
        this.className += " active";
    })
}