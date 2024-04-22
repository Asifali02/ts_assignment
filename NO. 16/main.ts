// CREATING A GUEST LIST ARRAY
var guestList = ["SUFIYAN", "FARAZ ALI KHOSO", "OWAIS ALI", "SAMEER"];
// MAKING VARIABLE FOR THOSE WHO CANT COME
var dontCome = guestList[3];
//PRIENT THE NAME OF GUEST WHO CANT COME
console.log(dontCome, "nai askta");
// ADD AND REMOVE VALUE FROM GUESTLIST ARRAY
guestList.splice(3, 3, "YASEEN");
// MESSAGE PREINT FOR BIGGER TABLE
console.log("Good News ! We have found a Bigger Table for dinner");
// ADDING A NEW VALUE AT STARTING INDEX OF ARRAY
guestList.unshift("ADNAN");
// ADDING A NEW VALUE AT ENDING INDEX OF ARRAY
guestList.push("KAMRAN");
// get a middle index of our guest list array
var middleindex = Math.floor(guestList.length / 2);
// adding a new guest to middle index of array
guestList.splice(middleindex, 0, "ARSHAD");
// prient message update list
console.log("updated List of Guest");
// sending a invitation message to our guests one by one with there names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me?")); });