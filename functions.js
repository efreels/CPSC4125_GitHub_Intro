$(document).ready(function() {
    //all custom jQuery will go here
    //$(".jumbotron-button").click(function(){
    //    $(".test").html("<b>Hello world!</b>");
    //})

    const a; //doesn't change
    var b = 1; //can change larger scope
    let c = 1; //can change smaller scope

    if( b == 2) { //falsy == !=
    
    } else if ( c === 3 ){  //same type === !==

    } else {

    }

    var d = b==2?"yes":"no"; //ternary condition ? true: false return(ternary)

    // basic arithmatic: + - x / , modulus, b+1 = 11 not always going to be 2 (javascript won't know if it's a string or int)

    // string, number, array [], json {}

    //array[]
    //sort, forEach, push, pop, shift

    var xkcdJson = {title: "Standard Model Changes", day: "26"}
    var xkcdDay = xkcdJson.day

    //GET, PUT, POST, DELETE | CREATE, RETRIEVE, UPDATE, DELETE (CRUD)

    for(var i = 0; i < someting; i++){

    }

    something.forEach()

    function firstFunction(variables){
        //process input,
        return variables + 1;
        //return something
    }

    Promise(function(){
        setTimeout(x);
        //whatever you're waiting on
    });

    console.log(variableName);

});