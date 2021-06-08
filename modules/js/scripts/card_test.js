function changeColor(color) {
    document.querySelector("card-element").backgroundColor = color
}

function setDimensions() {
    const height = document.querySelector("#widthInput").value
    const width = document.querySelector("#widthInput").value
    if (height.length === 0 || width.length === 0) {
        alert("width and/or height missing.")
        return
    }
    const card = document.querySelector("card-element")
    card.width = width
    card.height = height
}

function setPosition() {
    const left = document.querySelector("#leftInput").value
    const top = document.querySelector("#topInput").value
    if (left.length === 0 || top.length === 0) {
        alert("left and/or top missing.")
        return
    }
    const card = document.querySelector("card-element")
    card.left = left
    card.top = top
}

document.querySelector("#originalColor").addEventListener("change", (ev) => changeColor(ev.target.value))
document.querySelector("#skyColor").addEventListener("change", (ev) => changeColor(ev.target.value))
document.querySelector("#limeColor").addEventListener("change", (ev) => changeColor(ev.target.value))
document.querySelector("#setDimensionBtn").addEventListener("click", setDimensions)
document.querySelector("#setPositionBtn").addEventListener("click", setPosition)
