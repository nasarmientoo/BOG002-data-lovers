import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

function cargarPokemones(){
    fetch("./data/pokemon/pokemon.json")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            appendData(data);
        })
        .catch(function(err){
            console.log(err);
        });
}

cargarPokemones();

let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');

document.getElementById('pokebola1').addEventListener('click',ContinueSection2);

function Ocultar(){
    section1.style.display = 'none'
    section2.style.display = 'none'
}

function ContinueSection2(){
    Ocultar()
    section2.style.display = 'block'
}

function appendData(data){
    let container = document.getElementById('data');
    for (var i=0; i<data.length; i++){
        let div = document.createElement("div");
        div.innerHTML = 'Name:'+ data
    }
}