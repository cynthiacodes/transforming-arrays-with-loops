function onlyInitials(namesArray) {
    
    let result = [];

    for (let eachName of namesArray) {


        const firstName = eachName[0];

        const lastName = eachName[1];

        const getInitials = `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}.`;

        result.push(getInitials);

    }

    return result;
}

// Test cases

console.log(onlyInitials(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]), 'output should be ["A.K.", "L.H.", "Y.M."]');