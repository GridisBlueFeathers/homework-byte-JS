// 1.1
const isPositive = (isPositiveArr) => {
    let isPositiveRes = isPositiveArr.map(isPositiveItem => isPositiveItem > 0);
    return isPositiveRes;
}

console.log(isPositive([1, 2, -10, -2, 7]));

// 1.2
const users = [
    {
      name: 'Sam',
      role: 'admin',
      age: 25,
    },
      {
      name: 'Peter',
      role: 'admin',
      age: 16,
    },
      {
      name: 'Pablo',
      role: 'admin',
      age: 32,
    },
      {
      name: 'Enrico',
      role: 'client',
      age: 43,
    },
      {
      name: 'Mary',
      role: 'client',
      age: 34,
    },
      {
      name: 'Katerine',
      role: 'guest',
      age: 17,
    },
  ]

const findAdultAdmins = (findAdultAdminsArr) => {
    const admins = findAdultAdminsArr.filter(findAdultAdminsArrItem => findAdultAdminsArrItem.role == "admin" && findAdultAdminsArrItem.age > 18);
    const adultAdminsNames = admins.map(findAdultAdminsArrItem => findAdultAdminsArrItem.name);
    return adultAdminsNames;
}

console.log(findAdultAdmins(users));

// 1.3
const numbers = [1, 10, 17, 24, 45]

const average = (averageArr) => {
    let averageArrSum = averageArr.reduce((total, current) => total + current);
    const averageRes = averageArrSum / averageArr.length;
    return averageRes;
}

console.log(average(numbers));

// 2
const isNegative = (number) => number < 0;
const increment = (number) => number + 1;
const logger = (element, index, array) => {
  console.log(`In array [${array}] on position ${index}: ${element}`);
};

const ownForEach = (ownForEachArr, ownForEachCallback) => {
    const ownForEachRes = [];
    for (let ownForEachItem of ownForEachArr) {
        ownForEachRes.push(ownForEachCallback(ownForEachItem, ownForEachArr.indexOf(ownForEachItem), ownForEachArr));
    }
    return ownForEachRes;
}

const ownMap = (ownMapArr, ownMapCallback) => {
    const ownMapRes = [];
    for (let ownMapItem of ownMapArr) {
        ownMapRes.push(ownMapCallback(ownMapItem, ownMapArr.indexOf(ownMapItem), ownMapArr));
    }
    return ownMapRes;
}

const ownFilter = (ownFilterArr, ownFilterCallback) => {
    const ownFilterRes = [];
    for (let ownFilterItem of ownFilterArr) {
        if (ownFilterCallback(ownFilterItem, ownFilterArr.indexOf(ownFilterItem), ownFilterArr)) {
            ownFilterRes.push(ownFilterItem);
        }
    }
    return ownFilterRes;
}

ownForEach([1, 2, 3], logger);
const ownMapFooRes = ownMap([1, 2, 3], increment); // [2, 3, 4]
console.log('ownMapFooRes', ownMapFooRes);
const ownFilterFooRes = ownFilter([-2, 4, -1], isNegative);
console.log('ownFilterFooRes', ownFilterFooRes);

// 3
const data = [
    {
      name: "John",
      age: 24,
      position: "senior",
      isActive: false,
    },
    {
      name: "Peter",
      age: 33,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sam",
      age: 29,
      position: "junior",
      isActive: true,
    },
    {
      name: "Mary",
      age: 24,
      position: "middle",
      isActive: false,
    },
    {
      name: "Steve",
      age: 23,
      position: "middle",
      isActive: true,
    },
    {
      name: "Kate",
      age: 31,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sally",
      age: 19,
      position: "junior",
      isActive: false,
    },
    {
      name: "Jack",
      age: 19,
      position: "middle",
      isActive: true,
    },
  ];

// const filterData = (filterDataArr, filterDataObj) => {
//     const filterDataObjKeysArr = Object.keys(filterDataObj);
//     const filterDataRes = filterDataObjKeysArr.reduce((accumulator, currentValue) => {
//         const accumulatorFiltered = accumulator.filter(accumulatorItem => accumulatorItem[currentValue] == filterDataObj[currentValue]);
//         return accumulatorFiltered;
//     }, filterDataArr);
//     return filterDataRes;
// }

// console.log(filterData(data, { age: 19, position: "junior" }));

const filterDataAlt = (filterDataArr, filterDataObj) => {
  const filteredDataArr = filterDataArr.filter(filterDataArrObj => {
    const filterDataArrObjKeys = Object.keys(filterDataArrObj);
    const everyRes = filterDataArrObjKeys.every(filterDataArrObjKey => {
      if (filterDataObj.hasOwnProperty(filterDataArrObjKey)) {
        return filterDataArrObj[filterDataArrObjKey] == filterDataObj[filterDataArrObjKey];
      } else {
        return true
      }
    });
    return everyRes;
  })
  return filteredDataArr;
}

console.log(filterDataAlt(data, { age: 19, position: "junior" }));
console.log(filterDataAlt(data, { age: 24 }));