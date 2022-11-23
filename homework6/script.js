// 1
let userName;
let userSurname;
let userPassword;
let userNameIsInvalid = false;

do {
    userName = prompt("Enter your name:");
    if (!userName || userName == " ") {
        alert("You entered an invalid name");
    };
} while (!userName || userName == " ");

do {
    userSurname = prompt("Enter your surname:");
    if (!userSurname || userSurname == " ") {
        alert("You entered an invalid surname");
    };
} while (!userSurname || userSurname == " ");

do {
    userPassword = prompt("Enter a valid password:");
    if (!userPassword || userPassword == Number(userPassword) || userPassword == userPassword.toUpperCase() || userPassword == userPassword.toLowerCase() || userPassword.length < 6) {
        alert("You entered an invalid password");
    };
} while (!userPassword || userPassword == Number(userPassword) || userPassword == userPassword.toUpperCase() || userPassword == userPassword.toLowerCase() || userPassword.length < 6);

userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
userSurname = userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase();
alert(`Hello ${userName} ${userSurname}`);

// 2

const getRandomNumInRange = (numOne, numTwo) => {
    if (numOne > numTwo) {
        return Math.random() * (numOne - numTwo) + numTwo;
    } else {
        return Math.random() * (numTwo - numOne) + numOne;
    }
};

console.log(Math.round(getRandomNumInRange(2, 10)));