const express = require('express')
const app = express();
const gisRoute = require('./controler/Routes/gis')
const config = require('./logger/logger');
let logger = config.createLogger('mainpage-logger');
app.use(express.json());

app.use('/gis', gisRoute)
app.get('/',(req,res)=> {
    logger.log('info','get req to localhost')
    res.send(`hi :)` +'<br/>'+` APIS : `+ `<br/>`+` GET req to \\gis\\testpoint`+`<br/>` +`PUT req to \\gis\\addpolygon`);
});



app.listen(process.env.PORT , console.log("running"));
