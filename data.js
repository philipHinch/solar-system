// const url = 'https://api.le-systeme-solaire.net/rest/bodies/?data=id,englishName,isPlanet,mass,vol,density,gravity,equaRadius,aroundPlanet,discoveredBy,discoveryDate,avgTemp';

let sunUrl = 'https://api.le-systeme-solaire.net/rest/bodies/soleil';

const url = 'https://api.le-systeme-solaire.net/rest/bodies/';

async function getData() {
    const response = await fetch(url)
    const data = await response.json()
    return data
}
async function getSunData() {
    const response = await fetch(sunUrl)
    const data = await response.json()
    console.log(data)
}

window.addEventListener('DOMContentLoaded', () => {
    getSunData()
    getData()
        .then(res => getPlanets(res))   // do something here??? why do i want to console log the planets? i have to add the event listeners
})

function getPlanets(data) {
    for (let i = 0; i < data.bodies.length; i++) {
        if (data.bodies[i].isPlanet === true) {
            console.log(data.bodies[i])
        }
    }
}
