const sumAll = function(start, end) {
    let total = 0;
    for (let i = start; i <= end; i++){
        total += i;
    }
    console.log(total);
};

sumAll(1, 6);

// Do not edit below this line
module.exports = sumAll;
