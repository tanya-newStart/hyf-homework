const danishString = "Jeg har en blå bil";

//notThisFunctionName(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
//notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

const danishLetters = ["å", "æ", "ø"];

function findDanishLetters(str) {
  const lettersFound = { total: 0 };
  for (const letter of danishLetters) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        count++;
        lettersFound[letter] = count;
        lettersFound.total++;
      }
    }
  }
  return lettersFound;
}
console.log(findDanishLetters(danishString2));
