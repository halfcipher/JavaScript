var user  = {
    fName : "Shubham",
    lName : "Kadam",
    role : "SDE",
    loginCount : 25,
    fbSignedIn: true, 
}

console.log(user.loginCount);

user.loginCount = 48;
console.log(user.loginCount);
console.table(user);