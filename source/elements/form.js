import { Component, template, define } from '../import.js';
import html from '../templates/form.js';

export class Form extends Component {
    #form;

    constructor() {
        super();

        this.#form = this.shadowRoot.querySelector('form');
        this.#form.method = quantum.getAttribute(this, 'method');
    }

    static template = template(html);

    submit() {
        this.#form.submit();
    }
}

define('quantum-form', Form);