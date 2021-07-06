const sayHello = (req, res) => {
    res.status(200).json({"Hello": "World"})
}

module.exports = {
    sayHello
}
