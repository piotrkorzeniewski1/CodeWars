function humanReadable (seconds) {
  let time;
  let hours="";
  let minutes="";
  let sec="";
  let i;
  for( i = 0 ; seconds>=60 ; i++ )seconds=seconds-60;
  minutes=i;
  for(i=0;minutes>=60;i++)minutes=minutes-60;
  hours=i
  if(parseInt(hours)<10)
  {
    if(parseInt(hours)===0)
    {
        hours="00";
    }
    else
    {
        hours="0"+hours;
    }
  }
  
  if(parseInt(minutes)<10)
  {
    if(parseInt(minutes)===0)
    {
        minutes="00";
    }
    else
    {
        minutes="0"+minutes;
    }
  }
  
  if(parseInt(seconds)<10)
  {
    if(parseInt(seconds)===0)
    {
        seconds="00";
    }
    else
    {
        seconds="0"+seconds;
    }
  }
  
  time=hours+":"+minutes+":"+seconds;
  return time;
}