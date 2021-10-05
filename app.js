// VARIABLES

let body = document.querySelector('body');
let info = document.querySelector('.info');
const svg = document.querySelector('svg')
let mercury = document.querySelector('.cls-146');
let venus = document.querySelector('.cls-156');
let earth = document.querySelector('.cls-127');

//FUNCTIONS

//star rendering function
function defaultSmallStars() {
    let smallStars = document.createElement('div')
    smallStars.setAttribute('id', 'stars');
    smallStars.style.left = Math.random() * 100 + 'vw';
    smallStars.style.top = Math.random() * 100 + 'vh';
    smallStars.style.animationDuration = Math.random() * 20 + 25 + 's';
    body.appendChild(smallStars)
}

//star rendering function
function createSmallStars() {
    let smallStars = document.createElement('div');
    smallStars.setAttribute('id', 'stars');
    smallStars.style.left = Math.random() * 100 + 'vw';

    smallStars.style.animationDuration = Math.random() * 15 + 20 + 's';
    body.appendChild(smallStars)
    setTimeout(() => {
        smallStars.remove()
    }, 40000)  // changing this you might have to change animation duration in css
}

//display planet info function
function showPlanets(arr) {

    svg.addEventListener('click', (e) => {

        for (let i = 0; i < arr.bodies.length; i++) {
            if (e.target.id === arr.bodies[i].englishName && arr.bodies[i].moons !== null) {  //display planets that have moons
                info.innerHTML = `
                <h2 class="planet-name">${ e.target.id }</h2>
                <p><span class="property">Mass</span><span class="value"> ${ arr.bodies[i].mass.massValue.toFixed(2) }<sup>${ arr.bodies[i].mass.massExponent }</sup>kg</span></p>
                <p><span class="property">Volume</span><span class="value"> ${ arr.bodies[i].vol.volValue.toFixed(2) }<sup>${ arr.bodies[i].vol.volExponent }</sup> km<sup>3</sup></span></p>
                <p><span class="property">Density</span><span class="value"> ${ arr.bodies[i].density.toFixed(2) } g/cm<sup>3</sup></span></p>
                <p><span class="property">Radius</span><span class="value"> ${ numberWithCommas(arr.bodies[i].equaRadius.toFixed(2)) } km</span></p>
                <p><span class="property">Gravity</span><span class="value"> ${ arr.bodies[i].gravity.toFixed(2) } m/s<sup>2</sup></span></p>
                <p><span class="property">Moons</span><span class="value"> ${ arr.bodies[i].moons.length }</span></p>
                `
            } else if (e.target.id === arr.bodies[i].englishName && arr.bodies[i].moons === null && arr.bodies[i].vol !== null) { //display planets that dont have moons
                info.innerHTML = `
                <h2 class="planet-name">${ e.target.id }</h2>
                <p><span class="property">Mass</span><span class="value"> ${ arr.bodies[i].mass.massValue.toFixed(2) }<sup>${ arr.bodies[i].mass.massExponent }</sup>kg</span></p>
                <p><span class="property">Volume</span><span class="value"> ${ arr.bodies[i].vol.volValue.toFixed(2) }<sup>${ arr.bodies[i].vol.volExponent }</sup> km<sup>3</sup></span></p>
                <p><span class="property">Density</span><span class="value"> ${ arr.bodies[i].density.toFixed(2) } g/cm<sup>3</sup></span></p>
                <p><span class="property">Radius</span><span class="value"> ${ numberWithCommas(arr.bodies[i].equaRadius.toFixed(2)) } km</span></p>
                <p><span class="property">Gravity</span><span class="value"> ${ arr.bodies[i].gravity.toFixed(2) } m/s<sup>2</sup></span></p>
                <p><span class="property">Moons</span><span class="value"> None</span></p>
                `
            } else if (e.target.id === arr.bodies[i].englishName && arr.bodies[i].vol === null) {
                info.innerHTML = `
                <h2 class="planet-name">${ e.target.id }</h2>
                <p><span class="property">Mass</span><span class="value"> ${ arr.bodies[i].mass.massValue.toFixed(2) }<sup>${ arr.bodies[i].mass.massExponent }</sup>kg</span></p>
                <p><span class="property">Volume</span><span class="value"> 14.09<sup>18</sup> km<sup>3</sup></span></p>
                <p><span class="property">Density</span><span class="value"> ${ arr.bodies[i].density.toFixed(2) } g/cm<sup>3</sup></span></p>
                <p><span class="property">Radius</span><span class="value"> ${ numberWithCommas(arr.bodies[i].equaRadius.toFixed(2)) } km</span></p>
                <p><span class="property">Gravity</span><span class="value"> 274.00 m/s<sup>2</sup></span></p>
                <p><span class="property">Moons</span><span class="value"> None</span></p>
                `
            }
        }
    })
    showGeneralInfo()
}

//show general info
function showGeneralInfo() {
    window.addEventListener('click', (e) => {
        if (e.target.id == false) {
            info.innerHTML = `
            <h2 class="planet-name">The Solar System</h2>
            <div class="solar-system-info">The planetary system we call home is located in an outer spiral arm of the Milky Way galaxy.
                Our solar system consists of our star, the Sun, and everything bound to it by gravity – the planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune; dwarf planets such as Pluto; dozens of moons; and millions of asteroids, comets, and meteoroids.      
                Beyond our own solar system, there are more planets than stars in the night sky. So far, we have discovered thousands of planetary systems orbiting other stars in the Milky Way, with more planets being found. Most of the hundreds of billions of stars in our galaxy are thought to have planets of their own, and the Milky Way is but one of perhaps 100 billion galaxies in the universe.       
                While our planet is in some ways a mere speck in the vast cosmos, we have a lot of company out there. It seems that we live in a universe packed with planets – a web of countless stars accompanied by families of objects, perhaps some with life of their own. Our planetary system is named the "solar system" because our Sun is named Sol and anything related to the Sun we call "solar."</div>
            `
        }
    })
}

// function that adds commas to thousands numbers
function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// EVENT LISTENERS

//display stars
window.addEventListener('DOMContentLoaded', () => {
    // for (let i = 0; i < 10; i++) {
    //     createSmallStars()
    // }

    // for (let i = 0; i < 100; i++) {
    //     defaultSmallStars()
    // }

    setInterval(createSmallStars, 200)
})









