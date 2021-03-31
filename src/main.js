import { example } from './data.js';
import data from './data/pokemon/pokemon.js';

let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let container = document.getElementById('pocket_Container');
let popup = document.getElementById('pop-up');
let content = document.getElementById('pop-up-content');

document.getElementById('pokebola1').addEventListener('click',() => Continue(section2));
document.getElementById('icon-pokebola').addEventListener('click',() => Continue(section1));

function Capital(x){
    return x[0].toUpperCase() + x.substring(1);
}

function Hide(){
    section1.style.display = 'none'
    section2.style.display = 'none'
}

function Continue(section){
    Hide()
    section.style.display = 'block'
}

function Cover(section){
    section.style.display = 'none'
}

function Display(section){
    section.style.display = 'block'
}

function printValues(featuresList){
    let template = ""
    for (let i in featuresList) {
        let attackDetails = featuresList[i]
        let propertyValue = attackDetails["name"]
        template += "<br>" + propertyValue;
        /*for(var key in attackDetails){
            let propertyValue = attackDetails[key]
            template += "<p>"+ key +": "+ propertyValue + "</p>"
        }*/
    }
    return(template)
}

/*function printsValue(evolutionPokemon){
    let templateEvolution = ""
    for (let i in evolutionPokemon) {
        let evolutionDetails = evolutionPokemon[i]
        for (let key in evolutionDetails) {
            let evolutionValue = evolutionDetails["num"]
            templateEvolution += "<p>" + key + ":" + evolutionValue + "</p>";
        }
         
    }
    console.log(templateEvolution);
}   */ 

function Show(e){
    Display(popup)
    const num = e.currentTarget.dataset.pokemon
    let dataPopup = PokemonDetails(num)
    content.innerHTML = 
        `<div class = "popup-content">
            <img id = "close" class = "icon-close" src = "images/icons/close-window-52.png">
            <h1 class = "popup-num">N.° ${dataPopup.num} ${Capital(dataPopup.name)}</h1>
            <img class = "img-popup" src = ${dataPopup.img}> 
            <div class = "general">
            &nbsp Height:  ${dataPopup.size.height} <br>
            &nbsp Weight:  ${dataPopup.size.weight} <br>
            &nbsp Rarity: ${dataPopup["pokemon-rarity"]} <br>
            &nbsp Type: ${dataPopup.type}
            </div>
            <div class = "especifics" > 
            Resistant: <br> ${dataPopup.resistant} <br> <br>
            Weaknesses: <br> ${dataPopup.weaknesses}
            </div>
                <div class = "attack">
                &nbsp Special Attack: ${printValues(dataPopup["special-attack"])} <br>
                </div>   
                <div class = "quick">
                &nbsp Quick Moves: ${printValues(dataPopup["quick-move"])}
            </div>
         </div>`
    document.getElementById('close').addEventListener('click',() => Cover(popup))
}

function AppendData(data){
    let contenedor = ""
    for (let i = 0; i < data.pokemon.length; i++) {     
        contenedor += 
        `<div class="card" type = "button" data-pokemon = "${data.pokemon[i].num}">
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
           AddEvents();
        })
        .catch(function(error){
            console.log(error);
        });

//Acceso a las cartas de las plantillas literales
function AddEvents(){
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++){
        cards[i].addEventListener('click',Show)
    }
}

function PokemonDetails(number){
    var info = data.pokemon
    const found = info.find(element => element.num === number);
    return found;
}