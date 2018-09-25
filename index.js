function theBeatlesPlay(musicians, instruments)
{
  var emptyArray = [];
  var i;
  for(i=0; i < musicians.length; i++)
  {
    emptyArray.push(musicians[i] ++ instruments[i]);
  }
}