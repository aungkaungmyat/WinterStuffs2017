//part 1
function greet(whattosay){

    return function(name){
        console.log(whattosay + ' ' + name);
    }

}

//greet('Hi')('Tony');

var sayHi = greet('Hi');
sayHi('Tony');



// part 2
function buildFunctions(){

    var arr = [];

    for(var i = 0 ; i < 3 ; i++){

        arr.push(
            function(){
                console.log(i);
            }
        )
    }


    return arr;
}

var fs = buildFunctions();

fs[0]();  // the value is 3.
fs[1]();  // the value is 3.
fs[2]();  // the value is 3.

//to fix the above issue, use 'let' instead of 'var'.


//another fix IIFE

function buildFunctions2(){

    var arr = [];

    for(var i = 0 ; i < 3 ; i++){

        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                }
                
            }(i))
        )
    }


    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();  // the value is 3.
fs2[1]();  // the value is 3.
fs2[2]();  // the value is 3.