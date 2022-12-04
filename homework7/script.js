// 1

const taskEntering = () => {
    const tasks = {};

    while (true) {
        let taskTime = prompt("Enter task time:");
        if (taskTime == null) break;
        let taskText = prompt("Enter task text:");
        if (taskText == null) break;
        
        tasks[taskTime] = taskText;
    }
    console.log(tasks);
}

taskEntering();
// 2

const salaries = {
    John: "4300.00",
    Ann: "5700.40",
    Pete: "4900.95",
};

const salariesSum = (employeesObj) => {
    let sum = 0;
    for (let key in employeesObj) {
        sum += +employeesObj[key] * 100;
    }
    const formattedSum = sum.toFixed(2);
    return formattedSum;
}

console.log(salariesSum(salaries));