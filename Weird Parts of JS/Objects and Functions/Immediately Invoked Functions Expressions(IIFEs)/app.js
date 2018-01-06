// function statement
function greet(name){
    console.log('Hello ' + name);
}
greet('John');

// using a function expression
var greetFunc = function(name){
    console.log('Hello ' + name);
};
greetFunc('John');

// using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name){
    
    return 'Hello ' + name;

}('John');
console.log(greeting);

var firtname = 'John';

// another way of Immediately Invoked Function Exprerssion
(function(name) {

    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
}(firtname));   //IIFE