import Net from "../Net/fetch-wrapper.js"

const net = new Net()

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

async function getHello() {
    const response = await net.testGet()
    document.querySelector("#hello-here").innerHTML = response.msg
}

async function helloReflection() {
  const response = await net.post("sayHello")
  document.querySelector("#hello-here").innerHTML = response.msg
}

async function byeReflection() {
  const response = await net.post("sayBye")
  document.querySelector("#hello-here").innerHTML = response.msg
}

document.querySelector("#originalColor").addEventListener("change", (ev) => changeColor(ev.target.value))
document.querySelector("#skyColor").addEventListener("change", (ev) => changeColor(ev.target.value))
document.querySelector("#limeColor").addEventListener("change", (ev) => changeColor(ev.target.value))
document.querySelector("#setDimensionBtn").addEventListener("click", setDimensions)
document.querySelector("#setPositionBtn").addEventListener("click", setPosition)
document.querySelector("#helloBtn").addEventListener("click", getHello)
document.querySelector("#hiReflec").addEventListener("click", helloReflection)
document.querySelector("#byeReflec").addEventListener("click", byeReflection)
