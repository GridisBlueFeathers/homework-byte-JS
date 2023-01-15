// 1
const response = {
    data: [
        {
        username: "samuel",
        is_active: true,
        created_at: "2020-11-20T09:53:50.000000Z",
        },
        {
        username: "john",
        is_active: false,
        created_at: "2020-11-20T09:53:50.000000Z",
        },
        {
        username: "peter",
        is_active: false,
        created_at: "2020-11-20T09:53:50.000000Z",
        },
    ],
    meta: {
        paging: {
        current: 1,
        next: 2,
        prev: null,
        total: 14,
        per_page: 3,
        },
    },
};

const { 
    meta: {
        paging: { total }
    },
    data: [
        {
            is_active: isActive
        }
    ]
} = response;

console.log('Task 1: total, isActive :>> ', total, isActive);

// 2
const user = {
    name: "gabriel",
    surname: "brown",
    age: 17,
    height: 178,
};

const { name: personName, surname: personSurname, ...parameters} = user;
console.log('Task 2: name, surname, parameters :>> ', personName, personSurname, parameters);

// 3
const maxNum = (...numbers) => {
    return numbers[0].reduce((acc, val) => {
        return acc > val ? acc : val;
    });
}

console.log('Task 3: maxNum([1, 6, 3 , 4]) :>> ', maxNum([1, 6, 3 , 4]));

// 4
const createMessage = ({ author = "Guest", text, reciever, time = new Date() }) => {
    return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
};

const message = createMessage({ 
    author: "Peter", 
    text: "Hello", 
    reciever: "Sam", 
    time: new Date() });

const messageTwo = createMessage({
    reciever: "John",
    text: "Hi!",
});

console.log('Task 4: message, messageTwo :>> ', message, messageTwo);