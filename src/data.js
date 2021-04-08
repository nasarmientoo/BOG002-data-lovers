export const filterSearch = (data, pocket) => {
  return data.filter(pokemon => {
    if(isNaN(pocket)) { 
      return pokemon.name.toLowerCase().includes(pocket.toLowerCase())
    } else {
        return pokemon.num.includes(pocket)
      }
  })
}

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

export const orderFilterNum = (data, sortValue) => {
  const Array = data.slice()
  let orderNum = Array.sort((a,b) => ((a.num > b.num ? 1 : -1))) 

  if (sortValue === '1-251') {
    return orderNum;
  }
  
  if (sortValue === '251-1') {
    orderNum = orderNum.reverse()
  }
  return orderNum;

};

/*export const filterByCategory =  (data, value) => {

}*/
