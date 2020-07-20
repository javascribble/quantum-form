import { Component, template, getAttribute } from '../../references/quantum.js';
import html from '../templates/form.js';

export class Form extends Component {
    #form;

    constructor() {
        super();

        this.#form = this.shadowRoot.querySelector('form');
        this.#form.method = getAttribute(this, 'method');
    }

    static template = template(html);

    static attributes = [];

    submit() {
        this.#form.submit();
    }
}

customElements.define('quantum-form', Form);