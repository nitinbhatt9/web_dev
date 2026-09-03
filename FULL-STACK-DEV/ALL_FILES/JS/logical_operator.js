// check if the number is greater than 10 and less than 50.
const num = 12;
if(num > 10 && num <50){
    console.log(`yes this number is in between 10 and 50`);
}
else{
    console.log(`no this number is not in between 10 and 50`);
}

// check if the number is even and +ve.
const val = 13;
if((val >= 0) && (val%2 === 0)){
    console.log(`given number is even as well as +ve`);
}
else{
    console.log(`given number maybe (odd or -ve)`);
}

// check if the number is -ve or zero.
const number = 1;
if((number < 0) || (number === 0)){
    console.log(`number is negative or zero`);
}
else{
    console.log(`number is positive or non-zero`);
}

// check if a person is eligible to vote (age >=18).
const age = 34;
if(age >= 18){
    console.log(`person is eligible to vote`);
} 
else{
    console.log(`person is not eligible to vote`);
}

// check if a user can login (username and password correct). 
let username = "nitin";
    password = "nitin123";
if((username === "nitin") && (password = "nitin123")){
    console.log(`login successfull`);
}    
else{
    console.log(`invalid user`);
}