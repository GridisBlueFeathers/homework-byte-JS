const formElement = document.getElementById("form");
const selectElement = document.getElementById("select");
const idElement = document.getElementById("id");
const cardsContainer = document.getElementById("cards__container");

let cardsCounter = 0;

class Card {
    constructor() {
        this.id = ++cardsCounter;
    }

    renderCard() {
        const cardElement = document.createElement("li");
        const closeElement = document.createElement("span");

        closeElement.innerText = "x";
        closeElement.addEventListener("click", () => {
            this.handleClose(this.id);
        });
        cardElement.setAttribute("id", this.id);

        cardElement.append(closeElement);
        cardsContainer.append(cardElement);
        
        return cardElement;
    }

    handleClose(id) {
        const card = document.getElementById(id);
        card.remove();
    }
}

class PlanetCard extends Card {
    constructor({ name, climate, terrain, population }) {
        super(id);
        this.name = name;
        this.climate = climate;
        this.terrain = terrain;
        this.population = population;
    }

    renderPlanetInfo() {
        const parentElement = super.renderCard();
        const nameElement = document.createElement("h2");
        const climateElement = document.createElement("p");
        const terrainElement = document.createElement("p");
        const populationElement = document.createElement("p");

        nameElement.innerText = this.name;
        climateElement.innerText = this.climate;
        terrainElement.innerText = this.terrain;
        populationElement.innerText = this.population;

        parentElement.append(nameElement, climateElement, terrainElement, populationElement);
    }
}

class VehicleCard extends Card {
    constructor({ name, cost_in_credits, crew, passengers }) {
        super(id);
        this.name = name;
        this.cost_in_credits = cost_in_credits;
        this.crew = crew;
        this.passengers = passengers;
    }

    renderVehicleInfo() {
        const parentElement = super.renderCard();
        const nameElement = document.createElement("h2");
        const costElement = document.createElement("p");
        const crewElement = document.createElement("p");
        const passengersElement = document.createElement("p");

        nameElement.innerText = this.name;
        costElement.innerText = `Cost: ${this.cost_in_credits}`;
        crewElement.innerText = `Crew: ${this.crew}`;
        passengersElement.innerText = `Passengers: ${this.passengers}`;

        parentElement.append(nameElement, costElement, crewElement, passengersElement);
    }
}

class StarshipCard extends Card {
    constructor({ name, model, manufacturer, max_atmosphering_speed }) {
        super(id);
        this.name = name;
        this.model = model;
        this.manufacturer = manufacturer;
        this.max_atmosphering_speed = max_atmosphering_speed;
    }

    renderStarshipInfo() {
        const parentElement = super.renderCard();
        const nameElement = document.createElement("h2");
        const modelElement = document.createElement("h3");
        const manufacturerElement = document.createElement("p");
        const speedElement = document.createElement("p");

        nameElement.innerText = this.name;
        modelElement.innerText = this.model;
        manufacturerElement.innerText = this.manufacturer;
        speedElement.innerText = this.max_atmosphering_speed;

        parentElement.append(nameElement, modelElement, manufacturerElement, speedElement);
    }
}

class ApiClass {
    static async handleForm(event) {
        event.preventDefault();
        
        const response = await fetch(`https://swapi.dev/api/${selectElement.value}/${idElement.value}/`);

        if(response.status === 404) {
            alert(`Not found`);
            return;
        };

        const info = await response.json()

        switch(selectElement.value) {
            case "planets":
                const planet = new PlanetCard(info);
                planet.renderPlanetInfo();
                break;
            case "starships":
                const starship = new StarshipCard(info);
                starship.renderStarshipInfo();
                break;
            case "vehicles":
                const vechicle = new VehicleCard(info);
                vechicle.renderVehicleInfo();
                break;
        }

        return;
    }
}

formElement.addEventListener("submit", ApiClass.handleForm)
