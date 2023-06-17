function getLength(word){
    return word.length;
}

function countStrings(inputArray) {
    return inputArray.map(getLength);
}

// Test cases

console.log(countStrings(["one", "two", "three", "four"]), 'output should be [3, 3, 5, 4]');