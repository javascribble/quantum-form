import form from '../templates/form.js';

export class Form extends Quantum {
    #form = this.shadowRoot.querySelector('form');

    constructor() {
        super();
    }

    submit() {
        this.#form.submit();
    }
}

Form.define('quantum-form', form);