const reverseString = function(word) {
    let word_length = word.length;
    let newWord = '';
    for (let i = word_length - 1 ; i >= 0; i--){
        newWord += word[i];
    }
    console.log(newWord);
};

reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;
