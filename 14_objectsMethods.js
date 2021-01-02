var user  = {
    fName : "Shubham",
    lName : "Kadam",
    role : "SDE",
    loginCount : 25,
    fbSignedIn: true, 
    courseList: ["go","react"],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function(){
        return `${this.fName} is enrolled in ${this.courseList.length} courses`;
    },
    info: function(){
        return `${this.fName} ${this.lName} is a ${this.role} and he has signed in from fb: ${this.fbSignedIn} ${this.loginCount} times. He also purchased ${this.getCourseCount} courses and those are as follow ${this.courseList}`;
    },
};

//var courseList = true;
console.log(user.getCourseCount());
user.buyCourse("ReactJS")
user.buyCourse("Golang")

console.log(user.getCourseCount());
console.log(user.info());

