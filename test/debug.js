import '/node_modules/@javascribble/quantum/source/global.js';
import '/node_modules/@javascribble/quantum-check/source/global.js';
import '/source/global.js';

document.body.style.visibility = 'visible';

const form = document.querySelector('quantum-form');
form.addEventListener('submit', event => {
    console.log(event.timestamp);
});