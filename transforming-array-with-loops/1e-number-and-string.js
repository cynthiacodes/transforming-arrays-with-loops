function getNumberStringObjectArray(numberArray) {

    let result = [];

    for (let numberIndex of numberArray){
        const convertedObject = {};

        convertedObject.asNumber = numberArray[numberIndex];
        convertedObject.asString = numberArray[numberIndex].toString();

        result.push(convertedObject);

    }

    return result;
}


// Test Case
console.log(getNumberStringObjectArray([4, -3.2]),
    "output should be [{ asNumber: 4, asString: '4' }, { asNumber: -3.2, asString: ' - 3.2' }]");