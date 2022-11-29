// 1
const countTrue = (arrCountTrue) => {
    let resCountTrue = 0;
    for (let bool of arrCountTrue) {
        if (bool == true) {
            resCountTrue += 1;
        };
    };
    return resCountTrue;
}

console.log(countTrue([true, false, false, true, false])); // -> 2
console.log(countTrue([false, false, false, false])); // -> 0
console.log(countTrue([])); // -> 0

// 2
const getOccurrencesCount = (arrGetOccurrencesCount) => {
    const resObjGetOccurrencesCount = new Object();
    for (let i of arrGetOccurrencesCount) {
        if (resObjGetOccurrencesCount.hasOwnProperty(i)) {
            resObjGetOccurrencesCount[i] += 1;
        } else {
            resObjGetOccurrencesCount[i] = 1;
        }
    }
    return resObjGetOccurrencesCount;
}

console.log(getOccurrencesCount(["a", "v", "a", "b", "b"]));
console.log(getOccurrencesCount([
    "apples",
    "oranges",
    "pears",
    "pears",
    "apples",
    "oranges",
    "oranges",
    "pears",
  ]));

// 3
const findExcess = (arrFindExcess) => {
    const arrOfMods = new Array();
    
    for (let arrFindExcessNumber of arrFindExcess) {
        arrOfMods.push(arrFindExcessNumber % 2)
    }

    const objOfModsAmount = getOccurrencesCount(arrOfMods);

    if (objOfModsAmount[0] == 1) {
        return arrFindExcess[arrOfMods.indexOf(0)];
    } else {
        return arrFindExcess[arrOfMods.indexOf(1)];
    }
}

console.log(findExcess([0, 1, 2])); // -> 1
console.log(findExcess([1, 2, 3])); // -> 2
console.log(findExcess([2, 6, 8, 10, 3])); // -> 3
console.log(findExcess([0, 0, 3, 0, 0])); // -> 3
console.log(findExcess([1, 1, 0, 1, 1])); // -> 0