const app = require ('./app')
const ROUTE = require('./route')
const TEST = require('../models/test')


app.get(ROUTE.MAIN, (req,res,err) => {
    res.json(TEST)
})


