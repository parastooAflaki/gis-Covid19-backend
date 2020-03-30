const express = require('express');
const service = require('C:/Users/Asus/Desktop/Covid19-gis-backend/service/gis-service')
const config = require('/Users/Asus/Desktop/Covid19-gis-backend/logger');
let logger = config.createLogger('gis-controller');
const router = express.Router();


router.use((req, res, next) => {
    logger.info(
        req.method +
        " Request To " +
        req.url +
        " | Time: " +
        new Date()
    );
    next();
  });


router.get('/testpoint', (req , res)=>{
    logger.info("get req to /gis/testpoint")
    res.send(service.testpoint(req.query.lat , req.query.long))
});

router.put('/addpolygon' , (req , res) =>{
    logger.info("get req to /gis/testpoint")
    polygan = req.body;
    service.addPolygan(polygan);
    res.status('200').send("DONE!")
});

module.exports = router;