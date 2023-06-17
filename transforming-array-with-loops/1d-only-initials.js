function onlyInitials(namesArray) {

    for (let eachName of namesArray) {

        let result = [];

        const firstName = eachName[0];

        const lastName = eachName[1];

        const getInitials = `${firstName[0].upperCase()}.${lastName[0].upperCase()}.`;

        result.push(getInitials);

    }

    return result;
}

// Test cases

console.log(onlyInitials(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]), 'output should be ["A.K.", "L.H.", "Y.M."]');