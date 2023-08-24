const button = document.querySelector(".combo");
const modal = document.querySelector(".dialog");
const buttonClose = document.querySelector(".dialog button");
const sanduiche = document.querySelector(".sanduiche");
const nav = document.querySelector(".navdentro");

var radio = document.querySelector('.manual-btn');
var cont = 1;
document.getElementById('radio1').checked = true;

setInterval(() => {
    proximaImg()
}, 5000);

function proximaImg(){
    cont++
    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio' +cont).checked = true; 
}

sanduiche.addEventListener("click", () => nav.classList.toggle("active"));

button.onclick = function (){
    modal.showModal()
}

buttonClose.onclick = function (){
    modal.close()
}