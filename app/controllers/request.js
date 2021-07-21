class Methods {
  sayHello() {
    console.log("Hello there!")
    return "Hello there!"
  }

  sayBye() {
    console.log("Bye!")
    return "Bye!"
  }
}

const methods = new Methods()

const receiveRequest = (req, res) => {
  const {method} = req.body
  if (!method) {
    return res.status(400).json({msg: "Method not specified."})
  }
  try {
    const msg = methods[method]()
    res.status(200).json({msg})
  } catch (e) {
    console.error(e)
    res.status(404).json({msg: "Method not found."})
  }
}

module.exports = {
  receiveRequest
}
