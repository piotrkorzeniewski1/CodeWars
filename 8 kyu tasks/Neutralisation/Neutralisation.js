function neutralise(s1, s2) {
  let string1 = s1;
  let string2 = s2;
  let result='';
  for(let i = 0 ; i < string1.length ; i++)
  {
    if(string1[i]==='+'&&string2[i]==='+')
    {
      result = result + "+";
    }
    else if(string1[i]==='-'&&string2[i]==='-')
    {
      result = result + '-';
    }
    else
    {
      result = result +'0';
    }
  }
  return result;
}