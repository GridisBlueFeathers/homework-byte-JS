const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
    { id: 1, author: "A", name: "B", isReading: false },
    { id: 2, author: "A", name: "C", isReading: false },
    { id: 3, author: "A", name: "D", isReading: false },
    { id: 4, author: "A", name: "E", isReading: false },
    { id: 5, author: "A", name: "F", isReading: false },
];

const takeBook = () => {
    let bookNames = "";
    let bookNamesArr = [];
    books.forEach(book => {
        bookNames += `\n${book.name}`;
        bookNamesArr.push(book.name);
    });

    const bookNameInput = prompt(`Enter book name:\n${bookNames}`);

    let bookNameInputObject;
    bookNamesArr.forEach(bookName => {
        if (bookNameInput === bookName) {
            bookNameInputObject = books[bookNamesArr.indexOf(bookName)];
        };
    });

    if (!bookNameInputObject) {
        alert("Book is not in library");
        return;
    };

    if (bookNameInputObject.isReading) {
        alert("Book is currently unavailible");
        return;
    };

    bookNameInputObject.isReading = true;
    
    alert(`You took a book from library, book ID is ${bookNameInputObject.id}`);
};

const returnBook = () => {
    let bookIDsArr = [];
    books.forEach(book => {
        bookIDsArr.push(book.id);
    });

    const bookIDInput = Number(prompt(`Enter book id to return:`));

    const bookIDinIDs = bookIDsArr.some(id => {
        return bookIDInput === id;
    });

    if (!bookIDinIDs) {
        alert("There is no book with such ID in library")
        return;
    };

    books[bookIDInput - 1].isReading = false;
    alert("You returned the book");

};

const addBook = () => {
    const newBookName = prompt(`Enter new book's name:`);
    const newBookAuthor = prompt(`Enter new book's author:`);

    books.push({
        id: books.length + 1,
        author: newBookAuthor,
        name: newBookName,
        isReading: false
    });

    alert(`Book was added. Book id is ${books.length}`);
};

function library() {
    const action = prompt("Enter action:\nTake/Return/Add");

    switch (action) {
        case "Take":
            takeBook();
            break;

        case "Return":
            returnBook();
            break;

        case "Add":
            addBook()
            break;
    };
};