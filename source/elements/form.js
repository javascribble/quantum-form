import { Component, template } from '../../references/quantum.js';
import html from '../templates/form.js';

export class Form extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-form', Form);