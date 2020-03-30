const app = require('express')();
const gisRoute = require('/Users/Asus/Desktop/Covid19-gis-backend/router/Routes/gis')
const config = require('/Users/Asus/Desktop/Covid19-gis-backend/logger');
let logger = config.createLogger('mainpage');

app.use('/gis', gisRoute)
app.get('/',(req,res)=> {
    res.send("hi");
});

app.listen(5000 , console.log("hi"));
