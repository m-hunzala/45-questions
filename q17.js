// name array
var guestArray = ["fatima", "suman", "hareem"];
// can not make dinner
var canNotAttend = "hareem";
// invite new guest
var newGuest = "halima";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
guestArray.unshift("noreen");
var middleGuest = "aqsa";
var midleIndex = guestArray.length / 2;
guestArray.splice(midleIndex, 0, middleGuest);
guestArray.push("misbha");
console.log(guestArray);
console.log("we can invite only two people for dinner!");
while (guestArray.length > 2) {
    var removeguest = guestArray.pop();
    console.log("\nSorry ".concat(removeguest, " we can't invite you to dinner!"));
}
;
guestArray.map(function (item) { return console.log("\n".concat(item, " You are still invited to dinner!")); });
guestArray.pop();
guestArray.pop();
console.log(guestArray);
