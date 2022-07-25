const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');

function makeRed() {
    trafficLightEl3.style.background = ('red');
    trafficLightEl3.style.boxShadow = ('0 0 20px 7px red');
    trafficLightEl1.style.boxShadow = ('none');
    trafficLightEl2.style.boxShadow = ('none');
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('black');
    trafficLightEl1.removeEventListener('click', makeRed);
    trafficLightEl2.removeEventListener('click', makeRed);
    trafficLightEl3.removeEventListener('click', makeRed);
    trafficLightEl1.addEventListener('click', makeGreen);
    trafficLightEl2.addEventListener('click', makeGreen);
    trafficLightEl3.addEventListener('click', makeGreen);
};

trafficLightEl1.addEventListener('click', makeRed);
trafficLightEl2.addEventListener('click', makeRed);
trafficLightEl3.addEventListener('click', makeRed);

function makeYellow() {
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl1.style.boxShadow = ('none');
    trafficLightEl2.style.boxShadow = ('0 0 20px 7px yellow');
    trafficLightEl3.style.boxShadow = ('none');
    trafficLightEl1.style.background = ('black');
    trafficLightEl3.style.background = ('black');
    trafficLightEl1.removeEventListener('click', makeYellow);
    trafficLightEl2.removeEventListener('click', makeYellow);
    trafficLightEl3.removeEventListener('click', makeYellow);
    trafficLightEl1.addEventListener('click', makeRed);
    trafficLightEl2.addEventListener('click', makeRed);
    trafficLightEl3.addEventListener('click', makeRed);
};

trafficLightEl1.addEventListener('click', makeYellow);
trafficLightEl2.addEventListener('click', makeYellow);
trafficLightEl3.addEventListener('click', makeYellow);

function makeGreen() {
    trafficLightEl1.style.background = ('green');
    trafficLightEl1.style.boxShadow = ('0 0 20px 7px green');
    trafficLightEl2.style.boxShadow = ('none');
    trafficLightEl3.style.boxShadow = ('none');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('black');
    trafficLightEl1.removeEventListener('click', makeGreen);
    trafficLightEl2.removeEventListener('click', makeGreen);
    trafficLightEl3.removeEventListener('click', makeGreen);
    trafficLightEl1.addEventListener('click', makeYellow);
    trafficLightEl2.addEventListener('click', makeYellow);
    trafficLightEl3.addEventListener('click', makeYellow);
};

trafficLightEl1.addEventListener('click', makeGreen);
trafficLightEl2.addEventListener('click', makeGreen);
trafficLightEl3.addEventListener('click', makeGreen);