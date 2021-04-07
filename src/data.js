export const filterSearch = (data, pocket) => {
  return data.filter(pokemon => {
    if(isNaN(pocket)) { 
      return pokemon.name.toLowerCase().includes(pocket.toLowerCase())
    } else {
        return pokemon.num.includes(pocket)
      }
  })
}

<<<<<<< HEAD
=======
export const orderFilter = (data, sort) => {
  const newArray = data.slice()
  let orderNames= newArray.sort((a,b) => ((a.name > b.name ? 1 : -1 ))) 

  if (sort === 'ascendente') {
    return orderNames;
  }
  
  if (sort === 'descendente') {
    orderNames = orderNames.reverse()
  }
  return orderNames;
};
>>>>>>> 75485e6b85f0a67b98e95d5c3a46f3871af90f86
