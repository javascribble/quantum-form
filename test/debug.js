import '/node_modules/@javascribble/quantum/bundles/main-window.js';
import '/bundles/main.js';

document.body.style.visibility = 'visible';

const form = document.querySelector('quantum-form');
form.addEventListener('submit', event => {
    console.log(event.timestamp);
});