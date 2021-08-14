const dictionary = require("./dictionaries/words.json");

module.exports = {
    // Retorna uma lista com a quantidade solicitada de indexes aleatórios
    getRandomList: function (numberOfQuestions) {
        let listOfQuestions = new Set();
        while (listOfQuestions.size < numberOfQuestions) listOfQuestions.add(getRandomInt(dictionary.length))
        return Array.from(listOfQuestions)
    },
    // Retorna as questões da lista de indexes fornecida, e dá a opção de misturá-las
    getQuestions: function (questions, shuffle = false) {
        let currentDictionaryNumber;
        let pairs = []

        while (pairs.length < questions.length) {
            currentDictionaryNumber = questions[pairs.length]
            pairs.push({
                word: dictionary[currentDictionaryNumber].word,
                translation: dictionary[currentDictionaryNumber].translation,
                pronounce: dictionary[currentDictionaryNumber].pronounce,
                number: currentDictionaryNumber
            })
        }

        if (shuffle) pairs = shuffleArray(pairs)

        return pairs
    },
    // Retorna uma lista com as palavras e suas respectivas traduções de forma misturada.
    getSelectableAlternatives: function (pairsArray) {
        let arrayOfAlternatives = []
        for (i in pairsArray) {
            arrayOfAlternatives.push(pairsArray[i].word)
            arrayOfAlternatives.push(pairsArray[i].translation)
        }
        return shuffleArray(arrayOfAlternatives)
    }

}

const getRandomInt = (max) => Math.floor(Math.random() * max)

const shuffleArray = (array) => array
.map((value) => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value)