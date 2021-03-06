import Base from "../Base/base.js";

class Card extends Base {
    constructor() {
        super();
        this.top = "5%"
        this.left = "5%"
        this.padding = "2.5%"
        this.backgroundColor = "rgb(240, 238, 238)"
        this.borderRadius = "1.5%"
        this.display = "inline-block"
        this.position = "relative"
        this.textAlign = "center"
        this.boxShadow = "3px 5px #868181"
        this.margin = "1%"
    }
    connectedCallback() {
      
    }
}

customElements.define("card-element", Card);
