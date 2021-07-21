const Express = require("express")
const {receiveRequest} = require("../controllers/request")

const router = Express.Router()

router.post("/request", receiveRequest)

module.exports = router
