import { Component } from '../../references/quantum.js';

export class Form extends Component {
    constructor() {
        super();
    }

    static template = document.querySelector('#quantum-form');

    static attributes = [];
}

customElements.define('quantum-form', Form);