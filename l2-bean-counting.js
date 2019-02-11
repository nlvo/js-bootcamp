// count function for only the character 'B'
function countBs(character) {
    let count = 0;
    for (let i = 0; i < character.length; i++) {
    	// if character is equal to 'B', add 1 to count
        if (character[i] == 'B') {
            count++;
        }
    }
    return count;
}
console.log(countBs('BBC'));

// count any character
function countChar(character, letter) {
    var count = 0;
    for (let i = 0; i < character.length; i++) {
        if (character[i] == letter) {
            count++;
        }
    }
    return count;
}

console.log(countChar('kakkerlak', 'k'));