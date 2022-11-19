// 1

let numbersString = "";
for (let num = 1; num < 11; num++) {
    numbersString += `${num} `;
    
};
console.log(numbersString);

numbersString = "";
num = 1;
while (num < 11) {
    numbersString += `${num} `;
    num += 1;
};
console.log(numbersString);

numbersString = "";
num = 1;
do {
    numbersString += `${num} `;
    num += 1;
} while (num < 11);
console.log(numbersString);



 numbersString = "";
for (num = 20; num > 9; num--) {
    numbersString += `${num} `;
    
};
console.log(numbersString);

numbersString = "";
num = 20;
while (num > 9) {
    numbersString += `${num} `;
    num += -1;
};
console.log(numbersString);

numbersString = "";
num = 20;
do {
    numbersString += `${num} `;
    num += -1;
} while (num > 9);
console.log(numbersString);

// 2

const primeNumbers = (firstNumber, secondNumber) => {
    let numbers;
    if (firstNumber <= 2) {
        numbers = "2 ";
        iterator = 3;
    } else {
        numbers = "";
        iterator = firstNumber;
    };

    for (iterator; iterator < secondNumber + 1; iterator++) {
        iteratorDivisors = "";
        for (let n = 2; n < iterator; n++) {
            if (iterator % n == 0) {
                iteratorDivisors += `${n} `;
            };
        };
        if (iteratorDivisors == "") {
            numbers += `${iterator} `;
        };
    };
    console.log(numbers);
};

primeNumbers(1, 10);
primeNumbers(20, 100);

// 3

const LOGIN = "ADMIN";
const PASSWORD = "1q2w3e";

const authorizeFor = () => {
    let userLogin;
    let userPassword;
    let attemptsLeftFor = 3;
    for (attemptsLeftFor; attemptsLeftFor > 0; attemptsLeftFor--) {
        userLogin = prompt('Enter user name:');
        if(!userLogin) {
            alert(`Enter user login, attempts left: ${attemptsLeftFor - 1}`);
            continue;
        };

        userPassword = prompt('Enter password:');
        if(!userPassword) {
            alert(`Enter user password, attempts left: ${attemptsLeftFor - 1}`);
            continue;
        };
        
        if (userLogin === LOGIN && userPassword === PASSWORD) {
            alert("Login is successful");
            break;
        } else {
            alert(`Incorrect credentials, attempts left: ${attemptsLeftFor - 1}`);
        };
    };
};

authorizeFor();

const starsPyramid = (rows) => {
    for (let i = 0; i < rows; i++) {
        let stars = "";
        let spaces = "";

        for (let j = 0; j < 2 * i + 1; j++) {
            stars += "*";
        };

        for (let k = 0; k < rows - i - 1; k++) {
            spaces += " ";
        };

        console.log(spaces + stars);
    };
};

// starsPyramid(4);