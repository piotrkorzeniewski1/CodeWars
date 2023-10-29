function oneTwoThree(n) {
    let array=[];
    let x=n;
    if(n===0)
    {
      array[0]='0';
      array[1]='0';
    }
    else
    {
      array[0]='';
      array[1]='';
      for(n ; n>=9; n=n-9)
      {
          array[0]=array[0]+'9';
      }
      if(n>0) 
      {
        array[0]=array[0]+n;
      }
      for(let i=0 ; i<x ; i++)
      {
        array[1]=array[1]+"1";
      }
    }
    
    return array;
}