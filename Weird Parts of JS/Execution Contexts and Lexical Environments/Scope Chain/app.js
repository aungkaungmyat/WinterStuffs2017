function b() {
	console.log(myVar); //the value is 1. If myVar is declared after a(), the value will be undefined.
}

function a() {

	/*function b() {
		console.log(myVar); //the value is 2. If myVar is not set to 2, the value will be 1.
	}*/

	var myVar = 2;
	b();
}

var myVar = 1;
a();