// const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');

// console.log(sentimentScoreObject);
// /*
// {
//   score: 3,
//   positiveWords: ['happy', 'awesome', 'super'],
//   negativeWords: [],
// }
// */

const positiveWordBank = [
  "happy",
  "awesome",
  "super",
  "nice",
  "interesting",
  "challenging",
];
const negativeWordBank = ["boring", "sad", "bad"];

function getSentimentScore(str) {
  const sentenceArr = str.split(" ");
  const positiveWords = [];
  const negativeWords = [];
  for (word of positiveWordBank) {
    if (sentenceArr.includes(word)) {
      positiveWords.push(word);
    }
  }
  for (word of negativeWordBank) {
    if (sentenceArr.includes(word)) {
      negativeWords.push(word);
    }
  }
  return {
    score: positiveWords.length - negativeWords.length,
    positiveWords,
    negativeWords,
  };
}
console.log(getSentimentScore("I am mega super awesome happy"));
