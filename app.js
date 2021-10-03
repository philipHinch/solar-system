// VARIABLES
let body = document.querySelector('body');
let info = document.querySelector('.info');
let mercury = document.querySelector('.cls-146');
let venus = document.querySelector('.cls-156');
let earth = document.querySelector('.cls-127');



// STAR RENDERING FUNCTIONS
function defaultSmallStars() {
    let smallStars = document.createElement('div')
    smallStars.setAttribute('id', 'stars');
    smallStars.style.left = Math.random() * 100 + 'vw';
    smallStars.style.top = Math.random() * 100 + 'vh';
    smallStars.style.animationDuration = Math.random() * 20 + 25 + 's';
    body.appendChild(smallStars)
}


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

// EVENT LISTENERS

// DISPLAY STARS
window.addEventListener('DOMContentLoaded', () => {
    // for (let i = 0; i < 10; i++) {
    //     createSmallStars()
    // }

    // for (let i = 0; i < 100; i++) {
    //     defaultSmallStars()
    // }

    setInterval(createSmallStars, 200)
})








// on planet click, display planet info

// remove info if click outside planet



