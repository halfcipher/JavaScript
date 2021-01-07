



var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`your total course count is: ${this.courseCount}`);
  };
};

User.prototype.getFirstname = function () {
  console.log(`Your firstname is : ${this.firstName}`);
};

var shubham = new User("shubham", 2);
shubham.getCourseCount();


var ryan = new User("ryan", 1);
ryan.getFirstname();
