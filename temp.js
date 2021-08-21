const dictionary = require("./dictionaries/words.json");

// SETUP

const randomInt = (max) => Math.floor(Math.random() * max);
const merge = (...arrays) => arrays.reduce((acc, cur) => acc.concat(cur), []);
const shuffle = (array) =>
  array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);


// funcao que gera lista de números
const randomNumbers = (numberOfQuestions, arr = new Array()) => {
  let currentNumber = randomInt(dictionary.length);
  if (!arr.includes(currentNumber)) arr.push(currentNumber);
  if (arr.length < numberOfQuestions) randomNumbers(numberOfQuestions, arr);
  if (arr.length == numberOfQuestions) return arr;
};

// num[] -> words[]
const numsToWords = (...numbersList) => numbersList.map((num) => dictionary[num].word);
const nummsToTranslations = (...numbersList) => numbersList.map((num) => dictionary[num].translation);
const numsToPronounces = (...numbersList) => numbersList.map((num) => dictionary[num].pronounce);

const questionNumbers = randomNumbers(2)
const words = numsToWords(...questionNumbers);
const translations = nummsToTranslations(...questionNumbers);
const alternatives = shuffle(merge(words, translations))

console.log(alternatives);