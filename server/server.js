// Configuraciones servidor
require('./config/config.js')

const express = require('express');
const app = express();

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())

app.post('/newinfluencer', function (req, res) {
    let body = req.body;

    if (body.name == undefined || body.name == '') {
        res.status(400).json({
            ok: false,
            message: 'The name is required'
        })
    } else {
        res.json({
            influencer: body
        })
    }
})

app.get('/influencers', function (req, res) {
    res.json('@primeroinfluyo 2.0')
})

app.get('/influencer/:id', function (req, res) {
    let id = req.params.id
    res.json({
        id
    })
})

app.put('/influencer/:id', function (req, res) {
    let id = req.params.id
    res.json({
        id
    })
})

app.delete('/influencer/:id', function (req, res) {
    res.json('borrar influencer')
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
})