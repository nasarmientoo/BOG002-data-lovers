export const filterSearch = (data, pocket) => {
  return data.filter(pokemon => {
    if(isNaN(pocket)) { 
      return pokemon.name.toLowerCase().includes(pocket.toLowerCase())
    } else {
        return pokemon.num.includes(pocket)
      }
  })
}


/*export const filterSearch = (text,data) => {
  let input = text.value;
  for (let i = 0; i < data.length; i++) { 
    if (data[i].toLowerCase().includes(input)) {
      data[i].style.display="none";
    }
    else {
      data[i].style.display="list-item";                 
    }
  }
}*/
