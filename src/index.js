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

app.get(ROUTE.POUBELLE, (req, res, err) => {
    const { id } = req.params
    const poubelle = _.find(POUBELLES, (o) => o.id === parseInt(id))
    res.json(poubelle)
})

app.post(ROUTE.POUBELLE_PROCHE, async (req, res, err) => {
    console.log('post request called')
    const information = await req.body
    console.log(information)
    res.json({ status: 0 })
})
