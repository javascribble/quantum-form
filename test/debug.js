import '/node_modules/@javascribble/quantum/source/export.js';
import '/node_modules/@javascribble/quantum-check/source/export.js';
import '/source/export.js';

document.body.style.visibility = 'visible';

const form = document.querySelector('quantum-form');
form.addEventListener('submit', event => {
    console.log(event.timestamp);
});