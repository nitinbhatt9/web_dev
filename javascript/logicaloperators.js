// Logical Operators :-

// check if a number is greater than 10 and less than 50.
let num=11;
if (10<num && 50>num){
    console.log("This number is greater than 10 and less than 50");
} else {
    console.log("This number is not greater than 10 and less than 50")
}

// check if a number is even and positive
// Note:- For positive (number should be greater than 0.)
// In my case 12 is greater than 0. then it shows positive.
let x=12;
if (x>0 && x%2 === 0){
    console.log("even and positive");
} else {
    console.log("not even,positive")
}

// check if a number is negative or zero
let y= -21;
if (y<0 || y === 0){
    console.log("negative and zero");
} else {
    console.log("not negative,zero")
}

// check if a person is eligible to vote(age>=18).
let nm=18;
if(nm>=18){
    console.log("Its eligible to vote");
}else{
    console.log("not eligible to vote");
}

// check if a user can login(username and password correct).
let u = "nayan", p = "nayan1234";
if( u === "nayan" && p === "nayan1234" ){
console.log("username and password correct");
}else{
    console.log("incorrect username and password");
}