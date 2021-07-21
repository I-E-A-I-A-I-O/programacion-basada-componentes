const receiveRequest = (req, res) => {
  const {method} = req.body
  if (!method) {
    return res.status(400).json({msg: "Method not specified."})
  }
  try {
    const msg = this["method"]()
    res.status(200).json({msg})
  } catch (e) {
    console.error(e)
    res.status(404).json({msg: "Method not found."})
  }
}

function sayHello() {
  console.log("Hello there!")
  return "Hello there!"
}

function sayBye() {
  console.log("Bye!")
  return "Bye!"
}

module.exports = {
  receiveRequest
}
