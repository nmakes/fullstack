/* NESTED CODE INTUITION */

	function  multiplier(factor) 
	{
		return  function(number) 
		{
			return  number * factor;
		};
	}

	var  twice = multiplier (2);
	console.log(twice (5));

// OUTPUT 
// 10

/*
	In line 11, multiplier(2) would simply return:
		function(number) { number * 2 };

	This is equivalent to writing:
		var twice = function(number) { number * 2 };

	Thus, twice(5) would return:
		5 * 2;
*/

/* A higher intuition */

function threeNestedFunctions(num1)
{
	console.log("threeNestedFunctions called: " + num1);

	return function(num2)
	{
		console.log("tnf > nest1 called: " + num2);

		return function(num3)
		{
			console.log("tnf > nest1 > nest2 called: " + num3);
			return num1 * num2 * num3;
		}
	}
}

console.log(threeNestedFunctions(3)(7)(4));

// OUTPUT
// threeNestedFunctions called: 3
// tnf > nest1 called: 7
// tnf > nest1 > nest2 called: 4
// 84

/*
	Here, at line 46, threeNestedFunctions(3) would print log with num1(=3) and return:
		function(num2)
		{ 
			...
		}

	Thus, threeNestedFunctions(3)(7) is equivalent to writing:
		function(7)
		{
			...
		}

	Now function(7) would print log with num2(=7) and return:
		function(num3)
		{
			...
		}
	
	Thus, function(7)(4) is equivalent to writing:
		function(4)
		{
			...
		}

	Now, function(4) would print log with num3(=4) and return:
		num1 * num2 * num3

	which is equivalent to writing 3*7*4 (=84). This is finally print on the console.


	To, understand it better, visualize the process with the following code.
*/

var headVar = threeNestedFunctions(3);

var nest1Var = headVar(7);

var nest2Var = nest1Var(4);

console.log(nest2Var);
console.log(nest1Var(4));
console.log(headVar(7)(4));
console.log(threeNestedFunctions(3)(7)(4));

// All the above four console.log lines will produce the same output.
// Compare this concept with multi dimensional arrays.