 // reduce/concat method
 	let array = [[1, 2, 3], [4, 5], [6]];

 	const flattening = array.reduce(function(start, end){
 		return start.concat(end);
 	});
	console.log(flattening);