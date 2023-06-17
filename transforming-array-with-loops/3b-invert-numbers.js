function getConvertedNumber(number) {
    return number * -1;
}


function invertNumbers(numbersArray) {
    return numbersArray.map(getConvertedNumber);
}


// Test Cases
console.log(invertNumbers([1, -3, 2, 8, -10]), 'output should be [-1, 3, -2, -8, 10]')