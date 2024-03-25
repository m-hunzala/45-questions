// name array
var guestArray = ["fatima", "suman", "hareem"];
// can not make dinner
var canNotAttend = "hareem";
// invite new guest
var newGuest = "halima";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log("Welcom all we found a bigger dinner table!");
guestArray.unshift("noreen");
var middleGuest = "aqsa";
var midleIndex = guestArray.length / 2;
guestArray.splice(midleIndex, 0, middleGuest);
guestArray.push("suman");
guestArray.map(function (item) { return console.log("\nDear ".concat(item, " You are invited to dinner!")); });
