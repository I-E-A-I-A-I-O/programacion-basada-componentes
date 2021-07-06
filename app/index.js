const Express = require("express")
const Helmet = require("helmet")
const Cors = require("cors")
const helloRouter = require("./routers/hello")

const app = Express()
const port = process.env.PORT || 8000

app.use(Cors())
app.use(Helmet())
app.use(Express.json())
app.use(Express.static('static'))

app.use("", helloRouter)

app.listen(port, () => {
    console.info(`Server running in port ${port}`)
})
