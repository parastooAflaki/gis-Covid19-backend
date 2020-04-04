const express = require('express')
const app = express();
const gisRoute = require('./controler/Routes/gis')
const config = require('./logger/logger');
let logger = config.createLogger('mainpage-logger');
app.use(express.json());

app.use('/gis', gisRoute)
app.get('/',(req,res)=> {
    logger.log('info','get req to localhost')
    res.send("hi :)");
});

app.listen(process.env.PORT , console.log("running"));
