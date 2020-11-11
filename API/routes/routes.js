
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const GetWeatherController = require("../controllers/GetWeatherController")

module.exports = function (app) {
    app.get('/', jsonParser, async (req, res) => {
        
        res.status(200).format({
            'text/plain': function () {
              res.set({'Content-Type': 'text/plain'})
              res.send('hello IMS plain text response')
            },
          
            'text/html': function () {
              res.send('<h3 style="color:red; text-decoration:undeline; font-stlye:italic;">hello IMS html response</h3>')
            },
          
            'application/json': function () {
              res.json({ message: 'hello IMS JSON response' })
            },
          
            default: function () {
              // log the request and respond with 406
              res.status(406).send('Not Acceptable')
            }
          })
    });
    app.get('/getWeather', jsonParser, async (req, res) => {
        
        const getWeatherController = new GetWeatherController();
        const weather = await getWeatherController.init();
        console.log(weather.data)
        res.status(200).json(weather.data)
    })

}
