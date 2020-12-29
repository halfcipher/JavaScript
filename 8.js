function getUserRole(name, role){

    switch (role) {
        case "admin":
            return `${name} is a admin user`
            //break;
        case "subadmin":
            return `${name} is a halfadmin user`
              //  break;    
        case "testprep":
            return `${name} is a test admin user`
                //    break;
        default:
            return `${name} is a trial user`
            //break;
    }

}


console.log(getUserRole("shubham", "admin")); 


getRole = getUserRole("ashish", "testprep");
console.log(getRole);
