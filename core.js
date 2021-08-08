const dictionary = require("./dictionaries/1000enptbr.json");

// SEPARA O JSON EM 3 ARRAYS
let wordList = []
let translateList = []
let pronunceList  = []

for (var i in dictionary) {
    wordList.push(dictionary[i].word)
    translateList.push(dictionary[i].translation)
    pronunceList.push(dictionary[i].pronounce)
}

module.exports = {
    getPairs: function () {

    },
    getFiles: function() {

    }
}

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function shuffleArray(array){
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = this.getRandomInt(currentIndex)
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}