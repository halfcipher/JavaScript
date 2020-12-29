var user = "admin";

switch (user) {
    case "admin": 
        console.log("youll grt full access");
        break;
    case "subadmin": 
        console.log("youll grt full limited access");
        break;
    case "testprep": 
        console.log("youll grt test related accesd");
        break;       
    case "user": 
        console.log("youll grt site access");
        break;
    
    default:
        console.log("no access for you :(");
    break;
}