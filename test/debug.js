import '/source/main.js';
import '/references/quantum-check.js';

document.body.style.visibility = 'visible';

const form = document.querySelector('quantum-form');
form.addEventListener('submit', event => {
    console.log(event.timestamp);
});