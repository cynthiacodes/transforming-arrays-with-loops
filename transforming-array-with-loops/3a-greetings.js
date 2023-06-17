function sayHello(name) {
    return `Hello ${name}!`;
}

function greeting(nameArray) {
    let message = nameArray.map(sayHello)
    return message;

}

// Test cases

console.log(greeting(["Ash", "Beth", "Ciara"]), 'output should be ["Hello, Ash!", "Hello, Beth!", "Hello, Ciara!"]');