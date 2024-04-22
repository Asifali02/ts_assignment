// Array of current users
var current_users = ["ASIF ALI", "SUFI", "FARAZ ALI", "SAMEER", "OWAIS"];
// Array of new users
var new_users = ["YASEEN", "ASIF ALI", "SUFI", "FARAZ ALI KHOSO", "M.SAMEER"];
//loop throug the new users to check for users name avilibily
new_users.forEach(function (new_one_user) {
    //making a condition for user name already excist and save in our condition variable 
    var our_condition = (current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user.toLowerCase(); }));
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this usernsme ".concat(new_one_user, " is avilibile"));
    }
});
