function cycle(dir, arr, cur) {
	let direction = dir;
  let value = cur;
  let array = arr;
  let result = null;
  
  if(array.includes(value))
  {
      let index_contains=array.indexOf(value);
    
      if(direction===1)
      {
        if((index_contains!=array.length-1))
        {
          result = array[array.indexOf(value)+1];
        }
        else
        {
          result=array[0];
        }
      }
    
      else if(direction===-1)
      {
          if(index_contains===0)
          {
            result = array[array.length-1];
          }
          else
          {
            result = array[index_contains-1];
          }
      }
  }
  
  
  return result;
}