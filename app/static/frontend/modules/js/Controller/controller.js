class Controller {
  registerComponent(file) {
    const s = document.createElement("script")
    s.src = file + '.js'
    s.type = 'text/javascript';
    s.setAttribute("language", "JavaScript")
    s.type = "module"
    document.getElementsByTagName('head')[0].appendChild(s);
  }
}

const controller = new Controller()

controller.registerComponent("./js/scripts/card_test")
controller.registerComponent("./js/Card/card")
