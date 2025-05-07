console.log("ciao!");

let button = document.querySelector("button");
console.log(button); //controllo ok

button.onclick = function(){
    console.log("Hai premuto");

    let visibile = document.querySelector(".visibile");
    console.log(visibile); //controllo ok
    let vaiSinistra = document.querySelector(".vaiSinistra");
    console.log(vaiSinistra); //controllo ok
    let fratello = visibile.nextElementSibling;
    console.log(fratello); //controllo ok


    visibile.classList.replace("visibile", "vaiSinistra");

    if (fratello == null) {
        document.querySelector(".image").classList.add("visibile");
    } else {
        fratello.classList.add("visibile");
    }

    if (vaiSinistra != null) {
        vaiSinistra.classList.remove("vaiSinistra");
    }
}