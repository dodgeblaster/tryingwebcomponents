class Header extends HTMLElement {
    state = {
        count: 0
    }

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.innerHTML = /*html*/ `
            <link rel="stylesheet" href="./style.css" />
            <div class='w-full h-10 bg-gray-800 px-4 flex items-center'>
                <gj-button id='login' name="Login"></gj-button>
                <gj-button id='other' name="Other ${this.state.count}"></gj-button>
            </div>
        `
    }

    connectedCallback() {
        this.shadow.querySelector('#login').addEventListener('click', () => {
            alert('clicked')
        })

        const otherButton = this.shadow.querySelector('#other')
        otherButton.addEventListener('click', () => {
            this.state.count = this.state.count + 1
            otherButton.setAttribute('name', `Other ${this.state.count}`)
        })
    }

    disconnectedCallback() {
        console.log('disconnected')
    }

    attributeChangedCallback() {
        console.log('attributeChangedCallback')
    }
}

customElements.define('gj-header', Header)
