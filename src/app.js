const express = require('express')
const path = require('path')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Mohamed Essam'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about',
        name: 'Mohamed Essam'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'help, what do you need?'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'Egypt'
    })
})


app.get('*', (req, res) => {
    res.send('Sorry cant find that!')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})