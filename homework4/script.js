// 1
const isEqual = (numOne = 0, numTwo = 0) => numOne == numTwo;
console.log(`ifEqual()`, isEqual());
console.log(`ifEqual(10, 1)`, isEqual(10, 1));
console.log(`ifEqual(10, 10)`, isEqual(10, 10));

// 2
const arrowSum = (arrowSumNumOne = 0, arrowSumNumTwo= 0) => arrowSumNumOne + arrowSumNumTwo;
console.log(`arrowSum()`, arrowSum());
console.log(`arrowSum(4, 4)`, arrowSum(4, 4));
console.log(`arrowSum(5, 5)`, arrowSum(5, 5));

function usualSum (usualSumNumOne = 0, usualSumNumTwo = 0) {
    return usualSumNumOne + usualSumNumTwo;
};
console.log(`usualSum()`, usualSum());
console.log(`usualSum(6, 6)`, usualSum(6, 6));
console.log(`usualSum(7, 7)`, usualSum(7, 7));

// 3
const toPowerOf = (numToRaise, power = 2) => numToRaise ** power;
console.log(`toPowerOf(2)`, toPowerOf(2));
console.log(`toPowerOf(3)`, toPowerOf(3));
console.log(`toPowerOf(3, 3)`, toPowerOf(3, 3));

// 4
function weekDayByNum (weekDayNum = 1) {
    const weekDays = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];
    if ((weekDayNum >=1) && (weekDayNum <= 7)) {
        return weekDays[weekDayNum - 1];
    } else {
        return `There is no such a week day`
    };
}
console.log(`weekDayByNum(2)`, weekDayByNum(2));
console.log(`weekDayByNum(10)`, weekDayByNum(10));

//5
function userGreeting () {
    const userName = prompt("Please, enter your name");
    const userAge = Number(prompt("Please, enter your age"));
    if (userAge > 30) {
        return `Здравствуйте, ${userName}`;
    } else {
        return `Привет, ${userName}`;
    };
}
alert(userGreeting());