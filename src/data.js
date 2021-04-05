export const filterSearch = (text,data) => {
  let input = text.value;
  for (let i = 0; i < data.length; i++) { 
    if (data[i].toLowerCase().includes(input)) {
      data[i].style.display="none";
    }
    else {
      data[i].style.display="list-item";                 
    }
  }
}
