// Creating a Array
let userNames = ["ASIF ALI", "SUFI", "ADMIN", "FARAZ"]

userNames = []

if (userNames.length === 0){
    console.log("your Array is Empty we need to find some users!")
}else{
    //  Using forEach on Array
userNames.forEach(oneUser => {
    if (oneUser === "ADMIN" ){
        console.log(`Hello ${oneUser}, would you like to see a status report`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
    }
})
}


