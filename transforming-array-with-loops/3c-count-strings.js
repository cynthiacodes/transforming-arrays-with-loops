function countStrings(inputArray) {

    let result = [];

    for (let eachString of inputArray) {

        const getLength = eachString.length;

        result.push(getLength);

    }

    return result;
}

// Test cases

console.log(countStrings(["one", "two", "three", "four"]), 'output should be [3, 3, 5, 4]');