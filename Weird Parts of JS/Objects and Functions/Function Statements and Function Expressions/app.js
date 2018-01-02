greet();

function greet(){       //greet is name 
    console.log('hi');  //this is code
}


//anonymousGreet();     //this won't work because of 'var' nature.

var anonymousGreet = function(){    //there is no name. anonymousGreet is memory reference
    console.log('hi');              //this is code.
}

anonymousGreet();       //the way to invoke is the same.


function log(a){
    console.log(a);
    a();                //invoking the passed function.
}   

log(function(){
    console.log('hi');
})