const startBtnElement = document.getElementById("start");
const stopBtnElement = document.getElementById("stop");
const timerElement = document.getElementById("timer");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

let timeLeft = 5;
let timerRunning = false;
let timeoutID = null;

const splitTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - (hours * 3600)) / 60);
    const seconds = Math.floor(time - (hours * 3600) - (minutes * 60));

    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    }
}

const convertTime = (units) => {
    return String(units).length < 2 ? `0${units}` : units;
}

const startTimer = (time) => {
    return new Promise ((resolve) => {
        timerElement.style.display = "block";
        hoursElement.innerText = convertTime(splitTime(time).hours);
        minutesElement.innerText = convertTime(splitTime(time).minutes);
        secondsElement.innerText = convertTime(splitTime(time).seconds);
        
        if (time === 0) {
            resolve();
        } else {
            timeoutID = setTimeout(() => {
                timeLeft--;
                startTimer(timeLeft).then(() => {
                    resolve();
                });
            }, 1000);
        }

    })
}

startBtnElement.addEventListener("click", () => {
    if (!timerRunning) {
        timerRunning = true;
        startTimer(timeLeft)
            .then(() => {
                console.log('Timer ended!');
                timerRunning = false;
                timeLeft = 5;
            });
    }
})

stopBtnElement.addEventListener("click", () => {
    timerRunning = false;
    clearTimeout(timeoutID);
})