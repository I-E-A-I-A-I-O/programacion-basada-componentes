const sayHello = (req, res) => {
    res.status(200).json({"msg": "Hello World!"})
}

module.exports = {
    sayHello
}
