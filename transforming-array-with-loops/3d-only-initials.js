function getfirstLastNameInitials(nameString){
    const nameSplit = nameString.split(" ");
    return `${nameSplit[0][0]}.${nameSplit[1][0]}`

}

function onlyInitials(namesArray) {
    
    let result = [];

    for (let eachName of namesArray) {

        const firstLastName = eachName.split(" ");

        const getInitials = `${firstLastName[0][0].toUpperCase()}.${firstLastName[1][0].toUpperCase()}.`;

        result.push(getInitials);

    }

    return result;
}

// Test cases

console.log(onlyInitials(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]), 'output should be ["A.K.", "L.H.", "Y.M."]');