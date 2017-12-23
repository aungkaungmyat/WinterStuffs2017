//for const key word
/*window.onload = function(){
    const pi = 3.142;
    
    
    function calcArea(r){

        const pi = 10;

        console.log("The area is " + pi * r * r);
    }

    console.log(pi);

    calcArea(5);
}*/

//for let key word
/*window.onload = function(){
    var x = 10;

    if(x > 5){
        let x = 5;
        console.log("inside: " + x);
    }

    console.log("outside: " + x);
}

window.onload = function(){

    var items = document.getElementsByTagName("li");


    //will print 4 all the times
    for(var x = 0 ; x < items.length ; x++){
        items[x].onclick = function(){
            console.log(x);
        }
    }

    //will print the clicked number
    for(let x = 0 ; x < items.length ; x++){
        items[x].onclick = function(){
            console.log(x);
        }
    }

}*/

//for default paremeter
/*window.onload = function(){

    function logNinja(name = "Ryu", belt = "Red", age = 25){
        console.log("My name is " + name + " and my belt color is " + belt + " and my age is " + age);
    }

    logNinja();
    logNinja("Shuan", "pink", 40);

}*/

//for spread operator
/*window.onload = function(){
    var meats = ["ham", "salami", "bacon"];
    console.log(...meats);

    var nums1 = [1,2,3];
    var nums2 = [...nums1,4,5,6];
    console.log(nums2);


    var nums = [3,5,7];
    function addNums(a,b,c){
        console.log(a+b+c);
    }
    addNums(...nums);

}*/

//for template Strings
/*window.onload = function(){

    function logNinja(name, age){
        console.log(`my name is ${name} and my age is ${age}`);
 
        
    }
    logNinja("Ryu", 24);
}*/

//for object literals
/*window.onload = function(){
    
    var name = "Crystal";
    var belt = "Black";

    var ninja = {
        
        //ES5
        // name: name,
        // belt: belt
        // chop: function(x){
        //     console.log(`you chopped the enemy ${x} times`);
        // }
        name,belt,
        chop(x){
            console.log(`you chopped the enemy ${x} times`);
        }

    };

    console.log(ninja.name);
    console.log(ninja.belt);
    ninja.chop(5);

}*/

//for new string methods
/*window.onload = function(){

    var str = "graaaaavy ";

    console.log(str.repeat(5));


    var youSay = "goodbye";

    if(youSay.startsWith("goodbye")){
        var iSay = "hello";
    }
    console.log(`you say ${youSay}, I say ${iSay}`);
    // NEW STRING METHOD
    // -repeat
    // -startsWith
    // -endsWith
    // -includes

}*/

//for arrow functions
/*window.onload = function(){

    //var ninjaGreeting = name => console.log(`${name} says hiiiiya`);
    
    //ninjaGreeting("Mark");

    //for es5
    var ninja = {
        name: "Ryu",
        chop(x){
            var _this = this; //weird this problem
            window.setInterval(function(){
                if(x > 0){
                    console.log(_this.name + " chopped the enemy");
                    x--;
                }
            }, 1000);
        }
    };

    //with arrow fucntion
    var ninja = {
        name: "Ryu",
        chop(x){
            window.setInterval(() => {
                if(x > 0){
                    console.log(this.name + " chopped the enemy");
                    x--;
                }
            }, 1000);
        }
    };

    ninja.chop(5);
}*/

//for sets
/*window.onload = function(){

    var names = new Set();

    names.add("Shaun").add("Ryu").add("Crystal");
    names.delete("Crystal");
    console.log(names.size);
    console.log(names);

    var ninjas = ["shaun", "crystal", "yoshi", "ryu", "yoshi", "ryu"];

    var refinedNinja = new Set(ninjas);
    console.log(refinedNinja);
    
    ninjas =  [...refinedNinja];
}*/

//for generators
window.onload = () => {

    //just seeing how .next and yield work
    // function* gen(){
    //     yield console.log("pear");
    //     yield console.log("banan");
    //     console.log("apple");
    // }

    // var myGen = gen();
    // myGen.next();
    // myGen.next();
    
    //seeing the return object of yield
    // function* gen(){
    //     yield "pear";
    //     yield "banan";
    //     yield "apple"
    //     return "all done"; //without return, the value will be undefined.
    // }

    // var myGen = gen();
    // console.log(myGen.next());
    // console.log(myGen.next());
    // console.log(myGen.next());
    // console.log(myGen.next());


    function* gen(){
        var x = yield "pear";
        var y = yield "banan";
        var z = yield "apple"
        return x + y + z;
    }

    var myGen = gen();
    console.log(myGen.next());
    console.log(myGen.next(10));
    console.log(myGen.next(5));
    console.log(myGen.next(3));


    
}