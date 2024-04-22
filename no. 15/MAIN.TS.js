var guestList = ["SUFIYAN", "FARAZ ALI KHOSO", "OWAIS ALI", "SAMEER"];
var dontCome = guestList[3];
console.log(dontCome, "nai askta");
guestList.splice(3, 3, "YASEEN");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
