const OpenWeather = require( "../services/OpenWeather")


class GetWeatherController {
    
    constructor(){
        this.openWeather = new OpenWeather();   
    }

    async init(){
        const weather = await this.openWeather.getWeather();
        console.log(weather)
        return weather;
    }
}


module.exports = GetWeatherController