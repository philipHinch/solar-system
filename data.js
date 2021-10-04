// const url = 'https://api.le-systeme-solaire.net/rest/bodies/?data=id,englishName,isPlanet,mass,vol,density,gravity,equaRadius,aroundPlanet,discoveredBy,discoveryDate,avgTemp';

let sunUrl = 'https://api.le-systeme-solaire.net/rest/bodies/soleil';

const url = 'https://api.le-systeme-solaire.net/rest/bodies/';



async function getData() {
    const response = await fetch(url)
    const data = await response.json()
    showPlanets(data)
}

//get data on page load
window.addEventListener('DOMContentLoaded', () => {
    getData()
})
