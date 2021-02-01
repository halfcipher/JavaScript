const shubham = {
    firstName : "SHubham",
    lastName: "Kadam",
    role: "Super Admin",
    courseCount: 5,
    getInfo : function(){
        console.log(`
        firstname is ${this.firstName}
        last name is ${this.lastName}
        he is working as ${this.role}
        and he has enrolled to ${this.courseCount} courses
        `);
    }
}

// shubham.getInfo()

const harvey ={
    firstName: "Harvey",
    lastName: "Spectre",
    role: "Managing Director",
    courseCount: 10,
}

// harvey.getInfo();

//shubham.getInfo.bind(harvey)();

// var harveyDetails = shubham.getInfo.bind(harvey);
// harveyDetails();

shubham.getInfo.call(harvey);