// VARIABLES
let body = document.querySelector('body');


// STAR RENDERING FUNCTIONS
function defaultSmallStars() {
    let smallStars = document.createElement('div')
    smallStars.setAttribute('id', 'stars');
    smallStars.style.left = Math.random() * 100 + 'vw';
    smallStars.style.top = Math.random() * 100 + 'vh';
    body.appendChild(smallStars)
}


function createSmallStars() {
    let smallStars = document.createElement('div');
    smallStars.setAttribute('id', 'stars');
    smallStars.style.left = Math.random() * 100 + 'vw';
    body.appendChild(smallStars)
}


// DISPLAY STARS

window.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 10; i++) {
        createSmallStars()
    }

    for (let i = 0; i < 100; i++) {
        defaultSmallStars()
    }

    setInterval(createSmallStars, 300)
})





