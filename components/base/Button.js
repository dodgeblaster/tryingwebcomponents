export class Button extends HTMLElement {
    constructor() {
        super()
        const name = this.getAttribute('name') || 'hello'
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.innerHTML = /*html*/ `
            <link rel="stylesheet" href="./style.css" />
            <button
                class="px-4 py-1 mr-2 text-sm rounded-md bg-gradient-to-tr from-violet-500 to-fuchsia-500 text-white"
            >
                ${name}
            </button>
        `
    }

    static get observedAttributes() {
        return ['name']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'name') {
            const button = this.shadowRoot.querySelector('button')
            button.textContent = newValue
        }
    }
}

customElements.define('gj-button', Button)
