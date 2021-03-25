import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let container = document.getElementById('pocket_Container');

document.getElementById('pokebola1').addEventListener('click',() => Continue(section2));
document.getElementById('icon-pokebola').addEventListener('click',() => Continue(section1));

function Hide(){
    section1.style.display = 'none'
    section2.style.display = 'none'
}

function Continue(section){
    Hide()
    section.style.display = 'block'
}

function Capital(x){
    return x[0].toUpperCase() + x.substring(1);
}

function AppendData(data){
    let contenedor = ""
    for (let i = 0; i < data.pokemon.length; i++) {     
        contenedor += 
        `<div class="card">
            <div class= "border-small">
                <h2 class="poke-Number">N.° ${data.pokemon[i].num}</h2>
                <div class="clasifics">
                    <p class="poke-rarity">
                    <img class="icon-rarity" src="images/icons/circled-r-48.png" <br> Rarity: ${Capital(data.pokemon[i]["pokemon-rarity"])}</p>
                    <p class="generation" >
                    <img class="icon-generation" src="images/icons/circled-g-48.png"  <br> Generation: ${Capital(data.pokemon[i].generation.name)} </p>
                </div>
                <p class="pokemon-type"> ${data.pokemon[i].type}</p>
                <img class="img-container" src=${data.pokemon[i].img}><br>
                <p class="poke-name"> ${Capital(data.pokemon[i].name)} </p> 
                <p class="description"> ${data.pokemon[i].about} </p>
            </div>
        </div>`
    }
    container.innerHTML = contenedor
}

fetch("./data/pokemon/pokemon.json")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
           AppendData(data);
        })
        .catch(function(error){
            console.log(error);
        });
