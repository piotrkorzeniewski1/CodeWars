function spinAround(turns) {
  let x=0;
  let array = turns;
  for(let  i = 0 ; i<array.length ; i ++)
  {
    if(array[i]==='left')
    {
      x=x-90;
    }
    else
    {
      x=x+90
    }
  }
  x=Math.abs(x);
  x = Math.floor(x/360);
  return x;
}