const request = require('request')

const forecast = (latitude, longitude, callback ) => {
    const url = 'https://api.darksky.net/forecast/be86cd88d746a7354c4d88fb56a2c8e9/' + latitude + ',' + longitude

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees out. there is a " + body.currently.precipProbability + "% chance of rain")
            }
    })
}

module.exports = forecast