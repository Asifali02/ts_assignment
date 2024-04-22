// Array of current users
let current_users = ["ASIF ALI","SUFI","FARAZ ALI","SAMEER","OWAIS"]

// Array of new users
let new_users = ["YASEEN","ASIF ALI","SUFI","FARAZ ALI KHOSO","M.SAMEER"]

//loop throug the new users to check for users name avilibily
new_users.forEach(new_one_user => {
   //making a condition for user name already excist and save in our condition variable 
    let our_condition = (current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLowerCase())) 
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`this usernsme ${new_one_user} is avilibile`)
    }
})
