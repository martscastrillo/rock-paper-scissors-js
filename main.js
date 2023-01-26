"use strict";
const campoBatalla = document.querySelector('.campo-batalla');
const msjBatalla = document.getElementById('msj-batalla');
const imgAtaqueJugador = document.getElementById('img-ataque-jugador');
const imgAtaquePc = document.getElementById('img-ataque-pc');
const btnPiedra = document.querySelector('.btn-piedra');
const btnPapel = document.querySelector('.btn-papel');
const btnTijeras = document.querySelector('.btn-tijeras');

let optionPlayer;
let optionPc;
let imgJugador;
let imgPc;

const imagenes = [
    {
        name: "Piedra",
        url: "img/Piedra.png" 
    },
    {
        name: "Papel",
        url: "img/Papel.png" 
    },
    {
        name: "Tijeras",
        url: "img/Tijera.png" 
    }
];

function start() {
	campoBatalla.classList.add('collapsed');
}
function piedraPlayer(){
	console.log('piedra');
    optionPlayer = "Piedra";
	choice();
}
function papelPlayer(){
	console.log('papel');
    optionPlayer = "Papel";
    choice();
}
function tijerasPlayer(){
	console.log('tijeras');
    optionPlayer = "Tijeras";
	choice();
}
function choice() {
	let random = randomNumber();

    if(random == 0){
        optionPc = "Piedra";
    }else if(random == 1){
        optionPc = "Papel";
    }else if(random == 2){
        optionPc = "Tijeras"
    };
    battle();
}
function battle(){
    if(optionPlayer == optionPc){
        msjBatalla.innerHTML = "Empate";
    }else if(optionPlayer == "Piedra" && optionPc == "Tijeras"){
        msjBatalla.innerHTML = "Ganaste!";
    }else if(optionPlayer == "Papel" && optionPc == "Piedra"){
        msjBatalla.innerHTML = "Ganaste!";
    }else if(optionPlayer == "Tijeras" && optionPc == "Papel"){
        msjBatalla.innerHTML = "Ganaste!";
    }else{
        msjBatalla.innerHTML = "Perdiste :(";
    };
    addImagenes();

}
function randomNumber(){
    let n = Math.floor(Math.random() * 3);
    return n;
}

function addImagenes(){
    for(let i=0;i<imagenes.length;i++){
        if(optionPlayer == imagenes[i].name){
            imgJugador = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
            imgAtaqueJugador.innerHTML = inserta;
        };
        
        if(optionPc == imagenes[i].name){
            imgPc = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
            imgAtaquePc.innerHTML = inserta;
        };
        
    };


    campoBatalla.classList.remove('collapsed');
    
};


btnPiedra.addEventListener('click', piedraPlayer);
btnPapel.addEventListener('click', papelPlayer);

btnTijeras.addEventListener('click', tijerasPlayer)


window.addEventListener('load', start);
