function getConvertedObject(number) {
    const convertedObject = {};
    convertedObject.asNumber = number;
    convertedObject.asString = number.toString();
    return convertedObject;

}


function getNumberStringObjectArray(numberArray) {
    return numberArray.map(getConvertedObject);
}


// Test Case
console.log(getNumberStringObjectArray([4, -3.2]),
    "output should be [{ asNumber: 4, asString: '4' }, { asNumber: -3.2, asString: ' - 3.2' }]");