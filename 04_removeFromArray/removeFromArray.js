const removeFromArray = function(array, target) {
    let position = array.indexOf(target);
    array.splice(position,1);
    console.log(array);
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
