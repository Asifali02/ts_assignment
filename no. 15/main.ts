let guestList = ["SUFIYAN","FARAZ ALI KHOSO","OWAIS ALI","SAMEER"];

let dontCome = guestList[3];

console.log(dontCome, "nai askta");

guestList.splice(3, 3, "YASEEN");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));