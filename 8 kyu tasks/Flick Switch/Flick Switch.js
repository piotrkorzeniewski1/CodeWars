function flickSwitch(arr){
    let array=[];
    
    for(let i = 0 ; i <arr.length ; i++)
    {
        array.push(true);
    }
    for(let i = 0 ; i <arr.length ; i++)
    {
        if(arr[i]==='flick')
        {
          for(let j = i ; j <arr.length ; j++)
            {
              array[j]=!array[j];
            }
        }
    }
  return array;
}