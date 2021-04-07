export const filterSearch = (data, pocket) => {
  return data.filter(pokemon => {
    if(isNaN(pocket)) { 
      return pokemon.name.toLowerCase().includes(pocket.toLowerCase())
    } else {
        return pokemon.num.includes(pocket)
      }
  })
}
