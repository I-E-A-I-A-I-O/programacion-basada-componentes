import Base from "../Base/base.js";

class Card extends Base {
    constructor() {
        super();
        this.top = "5%"
        this.left = "5%"
        this.padding = "2%"
        this.backgroundColor = "rgb(240, 238, 238)"
        this.borderRadius = "1%"
        this.display = "inline-block"
        this.position = "relative"
        this.textAlign = "center"
        this.boxShadow = "0px 4px #868181"
        this.margin = "1%"
    }
    connectedCallback() {
      
    }
}

customElements.define("card-element", Card);
