
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

module.exports = function (app) {
    app.post('/', jsonParser, async (req, res) => {
        
        res.status(200).send({
            message: "Hello IMS"
        })
    })

}
