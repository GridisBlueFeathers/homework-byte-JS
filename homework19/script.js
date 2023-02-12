const renderCountryInfo = async () => {
    const getCountryResponse = await fetch("https://ipapi.co/json/");
    const getCountryResponseJson = await getCountryResponse.json();
    const countryCode = getCountryResponseJson.country_code;

    const countryResponse = await fetch(`https://restcountries.com/v2/name/${countryCode}`);
    const countryResponseJsonArr = await countryResponse.json();
    const countryResponseJson = countryResponseJsonArr[0];

    const countryContainer = document.getElementById("country");
    const countryNameElement = document.createElement("h2");
    const countryCapitalElement = document.createElement("h3");
    const countryCurrencyElement = document.createElement("p");
    const countryFlagElement = document.createElement("img");

    countryNameElement.innerText = countryResponseJson.name;
    countryCapitalElement.innerText = countryResponseJson.capital;
    countryCurrencyElement.innerText = countryResponseJson.currencies[0].code;
    countryFlagElement.setAttribute("src", countryResponseJson.flag);

    countryContainer.append(countryNameElement, countryCapitalElement, countryCurrencyElement, countryFlagElement);
}

const formHandler = async (event) => {
    const containerElement = document.getElementById("container");

    event.preventDefault();
    const formValue = event.target.querySelector("input").value;

    const getStarWarsResponse = await fetch(`https://swapi.dev/api/people/${formValue}`);
    const starWarsResponseJson = await getStarWarsResponse.json();

    const characterElement = document.createElement("div");
    const characterNameElement = document.createElement("h3");
    const characterFilmsButtonElement = document.createElement("button");
    const characterFilmsElementElement = document.createElement("ul");

    characterNameElement.innerText = starWarsResponseJson.name;
    characterFilmsButtonElement.innerText = "Films";

    characterFilmsElementElement.setAttribute("id", "characterFilms");

    characterElement.append(characterNameElement, characterFilmsButtonElement, characterFilmsElementElement);
    containerElement.append(characterElement);

    characterFilmsButtonElement.addEventListener("click", async () => {
        const filmsPromises = starWarsResponseJson.films.map(film => {
            return new Promise(async (resolve) => {
                const getFilmResponse = await fetch(film);
                const starWarsResponseJson = await getFilmResponse.json();
                resolve(starWarsResponseJson);
            })
        });

        const resolvedFilms = await Promise.all(filmsPromises);

        const filmElementsArr = resolvedFilms.map((resolvedFilm) => {
            const fileElement = document.createElement("li");
            fileElement.innerText = resolvedFilm.title;

            return fileElement;
        });


        characterFilmsElementElement.append(...filmElementsArr);
    })

}

const renderStarWarsForm = () => {
    const starWarsContainer = document.getElementById("starWars");
    
    const formElement = document.createElement("form");
    const inputElement = document.createElement("input");
    const buttonElement = document.createElement("button");
    
    buttonElement.innerText = "Get character";
    
    formElement.append(inputElement, buttonElement);
    formElement.addEventListener("submit", formHandler);
    
    starWarsContainer.append(formElement);
}


renderCountryInfo();
renderStarWarsForm();