const button = document.getElementById('button');

const createTooltip = (elem, text) => {
    const tooltip = document.createElement("div");
    tooltip.classList.toggle("tooltip")
    tooltip.innerHTML = `
        <p class="tooltip__text">
            ${text}
        </p>
        <div class="tooltip__arrow"></div>
    `;
    document.body.prepend(tooltip);

    const elemCoordinates = elem.getBoundingClientRect();
    const tooltipCoordinates = tooltip.getBoundingClientRect();
    const tooltipHalfWidth = tooltipCoordinates.width / 2;

    tooltip.style.left = `${elemCoordinates.left + (elemCoordinates.width / 2) - tooltipHalfWidth}px`;
    tooltip.style.top = `${elemCoordinates.top - 50}px`;

    const tooltipArrow = tooltip.querySelector(".tooltip__arrow");
    tooltipArrow.style.transform = `translate(${tooltipHalfWidth - 8}px, -8px) rotate(45deg)`
};

button.addEventListener("click", () => createTooltip(button, 'example text bla bla bla'));

