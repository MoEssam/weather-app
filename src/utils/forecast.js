const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=f15002327b40eb1624908b0cac0d4aaf'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.weather[0].description + ' and humidity is ' + body.main.humidity + ' and pressure is ' + body.main.pressure)
        }
    })
}

module.exports = forecast