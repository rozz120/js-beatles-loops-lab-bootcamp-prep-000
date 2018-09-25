function theBeatlesPlay(musicians, instruments)
{
  var emptyArray = [];
  var i;
  for(i=0; i < musicians.length; i++)
  {
    var musiciansChar = musicians[i];
    var instrumentsChar = instruments[i];
    var together = musiciansChar +  " plays " + instrumentsChar;
    
    emptyArray.push(together)
  }
  return emptyArray;
}


function johnLennonFacts(facts)
{
  var i=0;
  while (i <= facts.Length)
  {
  var stringFact = facts[i].toString() 
   facts[i] = stringFact + "!!!";
   i++
  }
  return facts
}

function iLoveTheBeatles()
{
  
}