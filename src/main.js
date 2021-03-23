import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let container = document.getElementById('pocket_Container');

document.getElementById('pokebola1').addEventListener('click',() => Continue(section2));
document.getElementById('icon-pokebola').addEventListener('click',() => Continue(section1));


function Ocultar(){
    section1.style.display = 'none'
    section2.style.display = 'none'
}

function Continue(section){
    Ocultar()
    section.style.display = 'block'
}

/*function rarityIcon(data){
    for (let i = 0; i < data.pokemon.length; i++) {
        if (data.pokemon[i][pokemon-rarity] === "normal"){
           return "images/icons/pockemon-52.png"
        }
    }
}*/

function appendData(data){
    for (let i = 0; i < data.pokemon.length; i++) {     
        container.innerHTML += 
            `<div class="card">
                <div class= "border-small">
                    <h2 class="poke-Number">N.° ${data.pokemon[i].num}</h2>          
                    <img class="img-container" src=${data.pokemon[i].img}><br>
                    <p> ${data.pokemon[i].name} </p> 
                    <p class="description"> ${data.pokemon[i].about} </p>
                </div>
            </div>`
    }
}
// <img class ="icon-rarity" src=${rarityIcon()}></img>

fetch("./data/pokemon/pokemon.json")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
           appendData(data);
        })
        .catch(function(error){
            console.log(error);
        });
