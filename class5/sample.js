// sample.js

var add = function(a,b)
{
	return a+b;
}

// using callback

var add = function(a,b) { 
	MyAdder(a,b,function(K){
			console.log(K);
		});
	};

var MyAdder = function(a,b,printVal)
{
	var t = a+b;
	printVal(t);
}

// incrememnt a number using callback

function incr(num){
	myinc(num, function(t){
		console.log(t);
	});
}

function myinc(t, callback){
	t = t+1;
	callback(t);
}