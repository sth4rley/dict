const dictionary = require("./dictionaries/words.json");

// SETUP

const getRandomInt = (max) => Math.floor(Math.random() * max);
const shuffleArray = (array) =>
  array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

// funcao que gera lista de números
const randomQuestionNumbers = (numberOfQuestions, arr) => {
  let currentNumber = getRandomInt(dictionary.length);
  if (!arr.includes(currentNumber)) arr.push(currentNumber); // se o número gerado não estiver na lista adicione-o
  if (arr.length < numberOfQuestions) randomQuestionNumbers(numberOfQuestions, arr);
  if (arr.length == numberOfQuestions) return arr;
};

// num[] -> words[]
const numsToWords = (...numbersList) => numbersList.map((num) => dictionary[num].word);
const nummsToTranslations = (...numbersList) => numbersList.map((num) => dictionary[num].translation);
const numsToPronounces = (...numbersList) => numbersList.map((num) => dictionary[num].pronounce);