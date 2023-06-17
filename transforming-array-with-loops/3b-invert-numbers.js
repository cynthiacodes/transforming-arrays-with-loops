function getConvertedNumber(number){
    return number * -1;
}


function invertNumbers(numbersArray) {

    result = [];
    
    for (let numberIndex in numbersArray) {

        const convertedNumber = numbersArray[numberIndex] * -1;

        result.push(convertedNumber);
    }

    return result
}


// Test Cases
console.log(invertNumbers([1, -3, 2, 8, -10]), 'output should be [-1, 3, -2, -8, 10]')