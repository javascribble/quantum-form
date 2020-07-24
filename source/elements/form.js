import html from '../templates/form.js';

export class Form extends quantum.Component {
    #form;

    constructor() {
        super();

        this.#form = this.shadowRoot.querySelector('form');
        this.#form.method = quantum.getAttribute(this, 'method');
    }

    static template = quantum.template(html);

    submit() {
        this.#form.submit();
    }
}

quantum.define('quantum-form', Form);