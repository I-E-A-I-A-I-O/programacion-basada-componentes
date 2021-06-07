import Base from "../Base/base.js";

class Card extends Base {
    constructor() {
        super();
        this._childrenRead = false
        this.top = "5%"
        this.left = "5%"
        this.padding = "2%"
        this.backgroundColor = "rgb(240, 238, 238)"
        this.borderRadius = "5%"
        this.attachShadow({mode: 'open'})
        document.body.appendChild(this)
    }
    connectedCallback() {
        if (!this._childrenRead) {
            this._childrenRead = true
            if (this.hasChildNodes()) {
                this.childNodes.forEach((value) => {
                    if (value.nodeName != "#text") {
                        this.shadowRoot.appendChild(value)
                    }
                })
            }
        }
    }
}

customElements.define("card-element", Card);
