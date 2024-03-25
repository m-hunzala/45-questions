// name array
var guestArray = ["fatima", "suman", "hareem"];
// can not make dinner
var canNotAttend = "hareem";
console.log("".concat(canNotAttend, " can not make it ,for dinner"));
// invite new guest
var newGuest = "halima";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
// send message
guestArray.map(function (items) { return console.log("Hello,".concat(items, " you are invited to dinner")); });
