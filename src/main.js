import {filterSearch} from './data.js';
import data from './data/pokemon/pokemon.js';

let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let container = document.getElementById('pocket_Container');
let sidebar = document.getElementById('sidebar');
let popup = document.getElementById('pop-up');
let content = document.getElementById('pop-up-content');
let message = document.querySelector('#mensaje');

document.getElementById('pokebola1').addEventListener('click', () => Continue(section2));
document.getElementById('icon-pokebola').addEventListener('click', () => Continue(section1));
document.getElementById('icon-menu').addEventListener('click', () => Display(sidebar));
document.getElementById('icon-close-search').addEventListener('click', () => Cover(sidebar));

//document.getElementById('icon-lupa').addEventListener('click', () => filterSearch(text,data.pokemon))

function Hide() {
    section1.style.display = 'none'
    section2.style.display = 'none'
}

function Continue(section) {
    Hide()
    section.style.display = 'block'
}

function Cover(section) {
    section.style.display = 'none'
}

function Display(section) {
    section.style.display = 'block'
}

function opt (section) {
    section.style.display = 'block'
}

function Capital(x) {
    return x[0].toUpperCase() + x.substring(1);
}

function printValues(featuresList) {
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
    return (template)
}

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
    document.getElementById('close').addEventListener('click', () => Cover(popup))
}

function AppendData(data) {
    let contenedor = ""
    for (let i = 0; i < data.length; i++) {
        contenedor +=
            `<div class="card" type = "button" data-pokemon = "${data[i].num}">
            <div class= "border-small">
                <h2 class="poke-Number">N.° ${data[i].num}</h2>
                <div class="clasifics">
                    <p class="poke-rarity">
                    <img class="icon-rarity" src="images/icons/circled-r-48.png" <br> Rarity: ${Capital(data[i]["pokemon-rarity"])}</p>
                    <p class="generation" >
                    <img class="icon-generation" src="images/icons/circled-g-48.png"  <br> Generation: ${Capital(data[i].generation.name)} </p>
                </div>
                <p class="pokemon-type"> ${data[i].type}</p>
                <img class="img-container" src=${data[i].img}><br>
                <p class="poke-name"> ${Capital(data[i].name)} </p> 
                <p class="description"> ${data[i].about} </p>
            </div>
        </div>`
    }
    container.innerHTML = contenedor
}

//Acceso a las cartas de las plantillas literales, se accede a la función Show
function AddEvents() {
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', Show)
    }
}

function PokemonDetails(number) {
    var info = data.pokemon
    const found = info.find(element => element.num === number);
    return found;
}

//Filtrar datos por nombre y numero
const input = document.querySelector('.text');
input.addEventListener('keyup', (e) => {
    let searchName = e.target.value;
    let searchInfo = filterSearch (data.pokemon, searchName);
    
    if(searchInfo.length === 0) {
        message.innerHTML = "Sorry, please check try again";
    } else {
        message.innerHTML = " ";
    }
    AppendData(searchInfo);
    AddEvents(searchInfo);
});

fetch("./data/pokemon/pokemon.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        AppendData(data.pokemon);
        AddEvents();
    })
    .catch(function (error) {
        console.log(error);
    });
