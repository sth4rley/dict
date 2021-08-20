const dictionary = require("./dictionaries/words.json");

// SETUP


const getRandomInt = (max) => Math.floor(Math.random() * max)
const shuffleArray = (array) => array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

// funcao que gera lista de números
const randomQuestionNumbers = (numberOfQuestions, arr) => {
    if (arr.length < numberOfQuestions) { // adiciona números até completar o array
        let currentNumber = getRandomInt(dictionary.length)
        if (!arr.includes(currentNumber)) arr.push(currentNumber); // se não tiver o número adicione-o
        randomQuestionNumbers(numberOfQuestions, arr)
    }
    if (arr.length == numberOfQuestions) return arr
}

// num -> word
const getWord = (num) => dictionary[num].word
const getTranslation = (num) => dictionary[num].translation
const getPronounce = (num) => dictionary[num].pronounce

// num[] -> words[]
const numsToWords = (numbersList) => numbersList.map(getWord)
const nummsToTranslation = (numbersList) => numbersList.map(getTranslation)
const NumsToPronounce = (numbersList) => numbersList.map(getPronounce)

console.log(numsToWords([34,40,900]))
