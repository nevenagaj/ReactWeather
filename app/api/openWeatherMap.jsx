var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=bc89a18c00d910ee108df9b699a52532&units=metric';

module.exports= {
    getTemp: function (location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; // pomocu `` varijable se ubacuju u string

        return axios.get(requestUrl).then(function (res){
            if (res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }
        },function (res) {
            throw new Error(res.data.message);
        });
    }
}