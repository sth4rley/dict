const dictionary = require("./dictionaries/words.json");

module.exports = {
    // Retorna uma lista com a quantidade solicitada de indexes aleatórios
    getRandomList: function (numberOfQuestions) {
        let listOfQuestions = new Set();
        while (listOfQuestions.size < numberOfQuestions) listOfQuestions.add(getRandomInt(dictionary.length))
        return Array.from(listOfQuestions)
    },
    // Retorna as questões da lista de indexes fornecida, e dá a opção de misturá-las
    getQuestions: function (questions, shuffle = false){
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
    }

}

function getRandomInt(max) {
return Math.floor(Math.random() * max)
}

function shuffleArray(array) { 
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = getRandomInt(currentIndex)
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}