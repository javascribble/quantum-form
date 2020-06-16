import { Quantum, define } from '../../references/quantum.js';
import { form } from '../templates/form.js';

export class Form extends Quantum {
    constructor() {
        super(form);
    }
}

define(Form);