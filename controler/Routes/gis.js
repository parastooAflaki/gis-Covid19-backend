const express = require('express');
const service = require('../../service/gis-service')
const config = require('../../logger/logger');
let logger = config.createLogger('gis-controller');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const GJV = require("geojson-validation");

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


router.get('/testpoint',[
                    check('lat').exists().isFloat(),
                    check('long').exists().isFloat()
                    
]
            , (req , res)=>{
                    const errors = validationResult(req);
                     if (!errors.isEmpty()) {
                        logger.log('error',"Exception in testpoint: :bad url")  
                        return res.status(400).json({ errors: errors.array() });
                     }
                    let point = [req.query.lat , req.query.long]
                    result = service.testpoint(point)
                    
                    if(result.isEmpty)
                        res.status('200').send("No area found")
                    else
                        res.status('200').send(service.testpoint(point))
        }
    );

router.put('/addpolygon' ,(req , res) =>{
                   
                    polygon = req.body;
                    
                    if(!GJV.isFeature(polygon ) || !GJV.isPolygon(polygon.geometry)){
                       
                        logger.log('error',"Exception in addpolygon: invalid polygon"),
                        res.status('400').send("invalid polygan")
                    }
                    service.addPolygon(polygon);
                    logger.log('info',"polygon "+polygon.properties.name+" added")
                    res.status('200').send(service.returnAllPolygons())
});

module.exports = router;