const swapi = document.querySelector(".swapi");

async function getResourse() {
    const response = await fetch("https://swapi.dev/api/planets");
    const data = await response.json();
    const { results } = data;

    const transformResults = results.map(value => {
        return transformData(value);
    });
    console.log(transformResults);

    const renderedResult = transformResults.map(el => {
        return renderData(el);
    });

    swapi.innerHTML = renderedResult.join(" ");
};

getResourse();

function transformData({name, rotation_period, orbital_period, diameter, url}) {
    return {
        name,
        rotationPeriod: rotation_period,
        orbitalPeriod: orbital_period,
        diameter,
        id: url.match(/[0-9]+/),
    };
};

function renderData({name, rotationPeriod, orbitalPeriod, diameter, id}) {
    return `
        <div class="swapies">
            <h2>Name: ${name}</h2>
            <p>Rotation period: ${rotationPeriod}</p>
            <p>Orbital period: ${orbitalPeriod}</p>
            <p>Diameter: ${diameter}</p>
            <p>Id: ${id}</p>
        </div>
    `
};