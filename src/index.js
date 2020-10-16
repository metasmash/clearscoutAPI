const app = require ('./app')
const ROUTE = require('./route')
const TEST = require('../models/test')


app.get(ROUTE.MAIN, (req,res,err) => {
    console.log("Service Main Appelé")
    console.log("Service Main Modifié")
    res.json(TEST)
})


