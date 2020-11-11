const Axios = require("axios");



class OpenWeather {

    constructor(){

        this.apiKey = process.env.open_weather_api_key
        this.endpoint = `http://api.openweathermap.org/data/2.5/forecast?q=chicago&appid=${this.apiKey}`
    }

    getWeather(){

        return Axios({
            method: 'get',
            url: this.endpoint
          }).then((data)=>{
            return data;
          }).catch((e)=>{
            console.log("error", e)
            return e
          })
    }

}

module.exports = OpenWeather