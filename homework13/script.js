const imgWrapperElementsArr = document.getElementById("imgContainer").children;
const prevButtonElement = document.getElementById("buttonPrev");
const nextButtonElement = document.getElementById("buttonNext");
let currentVisibleIndex = 0;

function nextPicture() {
    imgWrapperElementsArr[currentVisibleIndex].classList.remove("visible");

    if (currentVisibleIndex + 1 === imgWrapperElementsArr.length) {
        currentVisibleIndex = 0;
    } else {
        currentVisibleIndex += 1;
    }

    imgWrapperElementsArr[currentVisibleIndex].classList.add("visible");
}

function prevPicture() {
    imgWrapperElementsArr[currentVisibleIndex].classList.remove("visible");

    if (currentVisibleIndex - 1 < 0) {
        currentVisibleIndex = imgWrapperElementsArr.length - 1;
    } else {
        currentVisibleIndex -= 1;
    }
    
    imgWrapperElementsArr[currentVisibleIndex].classList.add("visible");
}

nextButtonElement.addEventListener("click", nextPicture);
prevButtonElement.addEventListener("click", prevPicture);
