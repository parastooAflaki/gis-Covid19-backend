const app = require('express')();
var inside = require('point-in-polygon');
const repo = require('C:/Users/Asus/Desktop/Covid19-gis-backend/repository/gis-repository');

const testpoint = (point)=> {
    const polygans = repo.getPolygans();
    let results = [];
    for ( polygan in polygans) {
        if (inside(point , polygan.geometry.coordinates)) {
             results.push(polygon.properties.name);
        }
    }
    return results;
}
const addPolygon = (polygon) => {
	repo.addPolygon(polygon);
};

module.exports = {
    testpoint : testpoint,
    addPolygon : addPolygon
}