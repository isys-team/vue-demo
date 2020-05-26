var randomWords = require('random-words');

var generateName = () => randomWords({ min: 1, max: 4 }).join(' ');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function generateInnerItems() {
    var result = [];
    for (var i = 0; i < getRandomInt(1,4); i++) {
        result.push({
            id: Date.now(),
            name: generateName()
        })
    }

    return result;
}

function generateItems() {
    var result = []
    for (var i = 0; i < 100; i++) {
        result.push({
            id: Date.now(), 
            name: generateName(),
            items: generateInnerItems(),
        });
    }

    return result;
}

module.exports.generateItems = generateItems;