export default class Base extends HTMLElement {
    constructor() {
        super();
        this.style.display = "inline-block"
        this.style.position = "relative"
        this.style.textAlign = "center"
    }
    get Container() {
        return this;
    }
    set width(width) {
        this.style.width = width
    }
    get width() {
        return this.style.width
    }
    set height(height) {
        this.style.height = height
    }
    get height() {
        return this.style.height
    }
    set top(top) {
        this.style.top = top
    }
    get top() {
        return this.style.top
    }
    set left(left) {
        this.style.left = left
    }
    get left() {
        return this.style.left
    }
    get backgroundColor() {
        return this.style.backgroundColor
    }
    set backgroundColor(color) {
        this.style.backgroundColor = color
    }
    get color() {
        return this.color
    }
    set color(color) {
        this.style.color = color
    }
    set borderRadius(radius) {
        this.style.borderRadius = radius
    }
    get borderRadius() {
        return this.style.borderRadius
    }
    set padding(padding) {
        this.style.padding = padding
    }
    get padding() {
        return this.style.padding
    }
}
