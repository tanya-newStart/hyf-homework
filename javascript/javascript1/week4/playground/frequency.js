function getCharacterFrequencies(str) {
  const arr = str.split(""); //return array of characters
  const letterCount = []; //initialize array to store letters and their count
  for (let i = 0; i < arr.length; i++) {
    const character = arr[i]; //current character of arr
    let found = false;

    for (let j = 0; j < letterCount.length; j++) {
      //this loop goes through array of objects and check if the character already there. if it is, the character count increases
      if (letterCount[j].character === character) {
        letterCount[j].count++;
        found = true;
        break;
      }
    }
    if (!found) {
      letterCount.push({ character: character, count: 1 });
    }
  }
  return letterCount;
}

console.log(getCharacterFrequencies("happy"));
/*
{
  characters: [
    {
      character: 'a',
      count: 1
    },
    {
      character: 'h',
      count: 1
    },
    {
      character: 'p',
      count: 2
    },
    {
      character: 'y',
      count: 1
    }
  ], length: 5
}
*/
