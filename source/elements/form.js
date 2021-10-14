import form from '../templates/form.js';

export class Form extends Quantum {
    #form = this.shadowRoot.querySelector('form');

    constructor() {
        super();

        this.#form.addEventListener('submit', console.log);
    }

    static get observedAttributes() { return ['action', 'target', 'method', 'autocomplete', 'novalidate']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        this.#form.setAttribute(attribute, currentValue);
    }

    submit() {
        this.#form.submit();
    }
}

Form.define('quantum-form', form);