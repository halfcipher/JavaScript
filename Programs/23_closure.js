function init(){
    var firstName = "shubham";
    console.log("INIT is here");
    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName;
    
}

// init();

var value = init();

value();