const wrapperElement = document.getElementById("wrapper");

const createInput = (inputName, inputLabel) => {
    const inputElement = document.createElement("div");

    const inputLabelElement = document.createElement("label");
    inputLabelElement.innerText = inputLabel;
    inputLabelElement.setAttribute("for", inputName);
    
    const inputInputElement = document.createElement("input");
    inputInputElement.setAttribute("type", "text");
    inputInputElement.setAttribute("name", inputName);
    inputInputElement.setAttribute("id", inputName);

    inputElement.append(inputLabelElement);
    inputElement.append(inputInputElement);
    return inputElement;
};

const createSelect = (selectName, selectLabel, selectOptions) => {
    const selectElement = document.createElement("div");

    const selectLabelElement = document.createElement("label");
    selectLabelElement.innerText = selectLabel;
    selectLabelElement.setAttribute("for", selectName);
    
    const selectSelectElement = document.createElement("select");
    selectSelectElement.setAttribute("type", "select");
    selectSelectElement.setAttribute("name", selectName);
    selectSelectElement.setAttribute("id", selectName);

    selectOptions.forEach(option => {
        const selectOptionElement = document.createElement("option");
        selectOptionElement.innerText = option.text;
        selectOptionElement.setAttribute("value", option.value);
        selectSelectElement.append(selectOptionElement);
    });

    selectElement.append(selectLabelElement);
    selectElement.append(selectSelectElement);
    return selectElement;
};

const renderForm = (arr) => {
    const formElement = document.createElement("form");
    formElement.setAttribute("id", "form");

    arr.forEach(element => {
        if (element.element === "text") {
            const inputElement = createInput(element.name, element.label);
            formElement.append(inputElement);
        } else {
            const selectElement = createSelect(element.name, element.label, element.options);
            formElement.append(selectElement);
        }
    });

    const buttonElement = document.createElement("button");
    buttonElement.innerText = "Submit form";
    buttonElement.setAttribute("type", "submit");
    formElement.append(buttonElement);

    wrapperElement.append(formElement);
};

const formConfig = [
    {
        element: "text",
        name: "login",
        label: "Логин",
    },
    {
        element: "text",
        name: "age",
        label: "Возраст",
    },
    {
        element: "select",
        name: "language",
        label: "Выберите язык программирования",
        options: [
        {
            text: "JavaScript",
            value: "js",
        },
        {
            text: "Java",
            value: "java",
        },
        {
            text: "Python",
            value: "python",
        },
        ],
    },
];

renderForm(formConfig);

const formElement = document.getElementById("form");
const formIDs = [];
formConfig.forEach(obj => {
    formIDs.push(obj.name);
});

const handleSubmit = (event) => {
    const formRes = {};

    event.preventDefault();

    formIDs.forEach(id => {
        const inputField = document.getElementById(id);
        formRes[id] = inputField.value;
    });

    console.log('formRes :>> ', formRes);
};

formElement.addEventListener("submit", handleSubmit);