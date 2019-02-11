/* 
	function which will return 
	an array containing all the numbers 
	from start to end
*/

function range(start, end, step = 1) {
	let numbers = [];

	// positive steps
    for (let i = start; i <= end; i += step) {
        numbers.push(i);
    }

    // negative steps
    for (let i = start; i >= end; i += step) {
        numbers.push(i);
    }
    return numbers;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

// function which will return the sum of the array with all numbers
function sum(number) {
    let result = 0;
    for (let i = 0; i < number.length; i++) {
        result += number[i];
    }
    return result;
}

console.log(sum(range(1, 10)));
// → 55