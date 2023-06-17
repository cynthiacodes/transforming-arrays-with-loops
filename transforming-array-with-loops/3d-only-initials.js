function getFirstLastNameInitials(nameString){
    const nameSplit = nameString.split(" ");
    return `${nameSplit[0][0]}.${nameSplit[1][0]}.`

}

function onlyInitials(namesArray) {
    return namesArray.map(getFirstLastNameInitials);
}

// Test cases

console.log(onlyInitials(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]), 'output should be ["A.K.", "L.H.", "Y.M."]');