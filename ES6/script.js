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