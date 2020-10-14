const app = require ('./app')
const ROUTE = require('./route')


app.get(ROUTE.MAIN, (req,res,err) => {
    res.json({status:0})
})


