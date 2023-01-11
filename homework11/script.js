const wrapper = document.createElement("div");
document.body.prepend(wrapper);

const displayPhones = (arr) => {
    arr.forEach(obj => {
        const phoneContainer = document.createElement("div");
        phoneContainer.innerHTML = `<h1>${obj.name}</h1>\n<h2>${obj.brand}</h2><ul></ul>`;
        propertiesList = phoneContainer.querySelector("ul");
        obj.properties.forEach(property => {
            const propertyElement = document.createElement("li");
            propertyElement.innerText = property;
            propertiesList.append(propertyElement);
        });
        wrapper.append(phoneContainer)    
    });
};

const products = [
    {
        name: "Iphone 12",
        brand: "Apple",
        price: 3200000,
        properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
    },
    {
        name: "Galaxy S20 Ultra",
        brand: "Samsung",
        price: 2900000,
        properties: ["120 hz screen", "Water resistance"],
    },
    {
        name: "MI 9",
        brand: "Xiaomi",
        price: 1300000,
        properties: ["Best price", "Pay less - get more!"],
    },
];

displayPhones(products);