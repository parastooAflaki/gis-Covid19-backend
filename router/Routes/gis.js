const express = require('express');
const app = express();
const service = require('C:/Users/Asus/Desktop/Covid19-gis-backend/service/gis-service')

const router = express.Router();

router.get('/testpoint', (req , res)=>{
res.send(service.testpoint(req.query.lat , req.query.long))
});

router.put('/addpolygon' , (req , res) =>{
    polygan = req.body;
    service.addPolygan(polygan);
    res.status('200').send("DONE!")
});

module.exports = router;