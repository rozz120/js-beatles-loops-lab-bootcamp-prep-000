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