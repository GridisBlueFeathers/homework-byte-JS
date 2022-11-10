console.log("Task one");
const a = 5;
const b = 10;
const taskOneSumStartA = a + b;
console.log("a + b =", taskOneSumStartA);
const taskOneDifferenceStartA = a - b;
console.log("a - b =", taskOneDifferenceStartA);
const taskOneMultiplicationStartA = a * b;
console.log("a * b =", taskOneMultiplicationStartA);
const taskOneDivisionStartA = a / b;
console.log("a / b =", taskOneDivisionStartA);
const taskOneSumStartB = b + a;
console.log("b + a =", taskOneSumStartB);
const taskOneDifferenceStartB = b - a;
console.log("b - a =", taskOneDifferenceStartB);
const taskOneMultiplicationStartB = b * a;
console.log("b * a =", taskOneMultiplicationStartB);
const taskOneDivisionStartB = b / a;
console.log("b / a =", taskOneDivisionStartB);

console.log("Task two");
console.log("true && true", true);
console.log("false || true", true);
console.log("true && 'false'", true);
console.log("0 && 1 || ' ' && 42", 42);
console.log("null == undefined", true);
console.log("'' == 0", true);
console.log("1 === '1'", false);
console.log("NaN === NaN && true", false);
console.log("true || false && true || false", true);
console.log("(true || false) && (true || false)", true);
console.log("10 || 0 && 'dog' || ''", 10);
console.log("(10 || 0) && ('dog' || '')", "dog");

console.log("Task three");
const firstNumberTaskThree = Number(prompt("Enter first number"));
const secondtNumberTaskThree = Number(prompt("Enter second number"));
if (firstNumberTaskThree == secondtNumberTaskThree){
    alert(`${firstNumberTaskThree} is equal to ${secondtNumberTaskThree}`);
} else if (firstNumberTaskThree > secondtNumberTaskThree) {
    alert(`${firstNumberTaskThree} is bigger than ${secondtNumberTaskThree}`);
} else {
    alert(`${firstNumberTaskThree} is less than ${secondtNumberTaskThree}`);
};

console.log("Task four");
const firstNumberTaskFour = Number(prompt("Enter first number"));
const secondtNumberTaskFour = Number(prompt("Enter second number"));
const action = prompt("Enter which action to do with numbers");
switch (action) {
    case "+":
        alert(`Result equals ${firstNumberTaskFour + secondtNumberTaskFour}`);
        break;
    case "-":
        alert(`Result equals ${firstNumberTaskFour - secondtNumberTaskFour}`);
        break;
    case "*":
        alert(`Result equals ${firstNumberTaskFour * secondtNumberTaskFour}`);
        break;
    case "/":
        alert(`Result equals ${firstNumberTaskFour / secondtNumberTaskFour}`);
        break;
    default:
        alert("This action is not supported");
};

console.log("Task five");
const personAge = Number(prompt("Enter person's age"));
if ((personAge < 12) || (personAge > 80 )) {
    alert("You are not allowed to ride");
} else if (((12 <= personAge) && (personAge <= 18)) || ((60 <= personAge) && (personAge <= 80))) {
    const adultPermission = prompt("Do you have an adult pernission? (Type Yes or No)")
    switch (adultPermission) {
        case "Yes":
            alert("You are good to go");
            break;
        case "No":
            alert("You are not allowed to ride");
            break;
        default:
            alert("You are not allowed to ride")
    }
} else {
    alert("You are good to go");
};
