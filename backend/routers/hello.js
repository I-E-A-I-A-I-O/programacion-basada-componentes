const Express = require("express")
const {sayHello} = require("../controllers/hello")

const router = Express.Router();

router.get("/hello", sayHello)

module.exports = router
