fs = require('fs')
resourcePath = '../resources/resource.json'
let rawreaddata  = fs.readFileSync(resourcePath);
let data = JSON.parse(rawreaddata);
const config = require('../logger/logger');
let logger = config.createLogger('gis-repository');

const addPolygon = (polygon)=>{
    data.features.push(polygon);
    rawWriteData =  JSON.stringify(data);

    fs.writeFileSync(resourcePath, rawWriteData);
    logger.log('info','new polygon is written to file')
}

const getPolygons = ()=> {
    return data.features;
}
module.exports = {
    getPolygons : getPolygons,
    addPolygon : addPolygon

}