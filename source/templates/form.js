export default `
<style>
    form input,
    form select,
    form textarea {
        padding: var(--padding, 0);
        margin: var(--margin, 0);
        width: 100%;
        color: inherit;
        font-size: inherit;
        text-decoration: none;
        background: var(--secondary-background-color);
        border: solid var(--border-size) var(--border-color);
        border-radius: var(--border-radius-size);
        outline: none;
    }

        form input:focus,
        form select:focus,
        form textarea:focus {
            border-color: var(--focus-color);
        }

        form input:invalid,
        form select:invalid,
        form textarea:invalid {
            border-color: var(--invalid-color);
        }

        form input:disabled,
        form select:disabled,
        form textarea:disabled {
            opacity: 0.5;
        }

        form input[type="checkbox"], form input[type="radio"] {
            height: 1.5em;
            width: 1.5em;
            cursor: pointer;
            opacity: 0;
        }

            form input[type="checkbox"] + label,
            form input[type="radio"] + label {
                position: relative;
                margin-right: var(--space-medium);
                top: -0.25em;
                left: 0.5em;
            }

                form input[type="checkbox"] + label:before,
                form input[type="radio"] + label:before {
                    content: '';
                    text-align: center;
                    position: absolute;
                    line-height: 1.5em;
                    height: 1.5em;
                    width: 1.5em;
                    top: -0.25em;
                    left: -2.25em;
                    color: var(--focus-color);
                    background: var(--secondary-background-color);
                    border: solid var(--border-size) var(--border-color);
                }

                form input[type="checkbox"] + label:before {
                    border-radius: var(--border-radius-size);
                }

                form input[type="radio"] + label:before {
                    border-radius: 50%;
                }

        form input:checked + label:before {
            content: '\ea10';
            background: var(--primary-color);
        }

        form select option, form select optgroup {
            background: var(--secondary-background-color);
        }

    form label {
        letter-spacing: var(--letter-spacing, 0.1em);
        text-transform: var(--text-transform, uppercase);
        font-weight: var(--font-weight, bold);
    }

    ::slotted(*) {
        margin: var(--margin, 0) 0;
    }
</style>
<form>
    <slot></slot>
</form>
`;