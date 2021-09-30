// const url = 'https://api.le-systeme-solaire.net/rest/bodies/?data=id,englishName,isPlanet,mass,vol,density,gravity,equaRadius,aroundPlanet,discoveredBy,discoveryDate,avgTemp';

const url = 'https://api.le-systeme-solaire.net/rest/bodies/';

async function getData() {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

window.addEventListener('DOMContentLoaded', () => {
    getData()
        .then(res => checkIfPlanet(res))
})

function checkIfPlanet(data) {
    for (let i = 0; i < data.bodies.length; i++) {
        if (data.bodies[i].isPlanet === true) {
            console.log(data.bodies[i]);
        }
    }
}