// Creating a Array
let userNames = ["ASIF ALI", "SUFI", "ADMIN", "FARAZ"];

//  Using forEach on Array
userNames.forEach(oneUser => {
    if (oneUser === "ADMIN" ){
        console.log(`Hello ${oneUser}, would you like to see a status report`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
    }
})