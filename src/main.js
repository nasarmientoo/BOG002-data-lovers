import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let section3 = document.getElementById('section3');

document.getElementById('pokebola1').addEventListener('click',ContinueSection2);

function Ocultar(){
    section1.style.display = 'none'
    section2.style.display = 'none'
    section3.style.display = 'none'
}

function ContinueSection2(){
    Ocultar()
    section2.style.display = 'block'
}

function ContinueSection3(){
    Ocultar()
    section3.style.display = 'block'
}
