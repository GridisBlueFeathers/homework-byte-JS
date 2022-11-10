function taskOne() {
    const a = 5;
        const b = 10;

        console.log("a + b =", a + b);
        console.log("a - b =", a - b);
        console.log("a * b =", a * b);
        console.log("a / b =", a / b);

        console.log("b + a =", b + a);
        console.log("b - a =", b - a);
        console.log("b * a =", b * a);
        console.log("b / a =", b / a);
};

function taskTwo() {
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
};

function taskThree() {
    const firstNumberTaskThree = Number(prompt("Enter first number"));
    const secondtNumberTaskThree = Number(prompt("Enter second number"));
    if (firstNumberTaskThree == secondtNumberTaskThree){
        alert(`${firstNumberTaskThree} is equal to ${secondtNumberTaskThree}`);
    } else if (firstNumberTaskThree > secondtNumberTaskThree) {
        alert(`${firstNumberTaskThree} is bigger than ${secondtNumberTaskThree}`);
    } else {
        alert(`${firstNumberTaskThree} is less than ${secondtNumberTaskThree}`);
    };
};

function taskFour() {
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
};

function taskFive() {
    const personAge = Number(prompt("Enter person's age"));
    function Range(a,b){
        return [...Array(b-a+1).keys()].map(x => x+a);
    };
    if ((personAge < 12) || (personAge > 80 )) {
        alert("You are not allowed to ride");
    } else if (Range(12, 18).includes(personAge) || Range(60, 80).includes(personAge)) {
        alert("Ask adult for a permission");
    } else {
        alert("You are good to go");
    };
};