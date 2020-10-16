const app = require('./app')
const ROUTE = require('./route')
const TEST = require('../models/test')
const POUBELLES = require('../models/poubelles')
const _ = require('lodash')

app.get(ROUTE.MAIN, (req, res, err) => {
    console.log('Service Main Appelé')
    res.json(TEST)
})

app.get(ROUTE.POUBELLES, (req, res, err) => {
    res.json(POUBELLES)
})

app.get('/poubelles/:id', (req, res, err) => {
    const { id } = req.params
    const poubelle = _.find(POUBELLES, (o) => {
        return o.id === parseInt(id)
    })
    res.json(poubelle)
})
