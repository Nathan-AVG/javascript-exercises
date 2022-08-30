const repeatString = function(word, number) {
    let newWord = '';
    for (let i = 0; i < number; i++){
        newWord += word;
    }
    console.log(newWord);
};

repeatString('hey',3);

// Do not edit below this line
module.exports = repeatString;
