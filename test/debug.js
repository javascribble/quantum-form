import '/node_modules/@javascribble/quantum/source/main.js';
import '/node_modules/@javascribble/quantum-check/source/main.js';
import '/source/main.js';

document.body.style.visibility = 'visible';

const form = document.querySelector('quantum-form');
form.addEventListener('submit', event => {
    console.log(event.timestamp);
});