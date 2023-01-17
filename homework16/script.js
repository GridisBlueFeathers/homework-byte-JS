let visitedTimes = localStorage.getItem("visitedTimes");

const renderVisitsNumber = (visitedTimes) => {
    const visitsNumberElement = document.createElement("h2");
    visitsNumberElement.style.textAlign = "center";
    visitsNumberElement.innerText = `You wisited this website ${visitedTimes} times`;
    document.querySelector(".wrapper").append(visitsNumberElement);
}

if (visitedTimes) {
    visitedTimes++;
    localStorage.setItem("visitedTimes", visitedTimes);
    renderVisitsNumber(visitedTimes);
} else {
    visitedTimes++;
    localStorage.setItem("visitedTimes", visitedTimes);
}
