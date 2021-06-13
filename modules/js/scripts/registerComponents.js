function registerComponents(file) {
    var s = document.createElement("script")
    s.src = file + '.js'
    s.type = 'text/javascript';
    s.setAttribute("language", "JavaScript")
    s.type = "module"
    document.getElementsByTagName('head')[0].appendChild(s);
}

registerComponents("./js/scripts/card_test")
registerComponents("./js/Card/card")
registerComponents("./js/Base/base")
