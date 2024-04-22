"use strict";
// Making a function
function make_shirt(size = "Large", printMessege = "I Love typeScript") {
    console.log(`Creating a ${size} shirt with the ${printMessege} print on shirt`);
}
// Calling a funtion with by dedault values
make_shirt();
//Calling a function now with Medium size and default message
make_shirt("Medium");
//Calling a function now with small size and different print message
make_shirt("Small", "I Love JavaScript");
