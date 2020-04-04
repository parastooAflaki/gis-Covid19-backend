const app = require('express')();
var inside = require('point-in-polygon');
const repo = require('../repository/gis-repository');
const config = require('../logger/logger');
let logger = config.createLogger('service-controller');


const testpoint = (point)=> {
    const polygons = repo.getPolygons();
    
    let results = [];
   polygons.forEach(element => {

    if (inside(point , element.geometry.coordinates[0])) {
        logger.log('info',"point "+point+"found in polygon "+element.properties.name)
        results.push(element.properties.name);
    }

   });
        
    return results;
}


const addPolygon = (polygon) => {
    repo.addPolygon(polygon);
};


const returnAllPolygons = ()=> {
    return repo.getPolygons();
}


module.exports = {
    testpoint : testpoint,
    addPolygon : addPolygon,
    returnAllPolygons : returnAllPolygons
}