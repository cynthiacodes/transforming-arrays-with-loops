

function greating(nameArray){

    let message = [];

    for(let nameIndex in nameArray){
        message.push(`Hello ${nameArray[nameIndex]}!`);
        
    }
    return message;

}

// Test cases

console.log(greating(["Ash", "Beth", "Ciara"]), 'output should be ["Hello, Ash!", "Hello, Beth!", "Hello, Ciara!"]');