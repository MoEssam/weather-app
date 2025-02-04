const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibW9lc3NhbTk3IiwiYSI6ImNrOWNvMW9ndzAweW0zbm80Y3cza3d4ZGQifQ.CPWhueW4pYVUKga2svROUg&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to mapbox service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location! Try another search!')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode