



var User = {
    name : "",
    getUserName : function(){
        console.log(`user name given is: ${this.name}`);
    },
}

var shubham = Object.create(User);
console.log(shubham);

shubham.name = "shubham kadam"

shubham.getUserName();
