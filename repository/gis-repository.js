fs = require('fs')
resourcePath = 'C:/Users/Asus/Desktop/Covid19-gis-backend/resources/resource.json'
let rawreaddata  = fs.readFileSync(resourcePath);
let data = JSON.parse(rawreaddata);

const addPolygon = (polygon)=>{
    data.features.push(polygon);
    rawWriteData =  JSON.stringify(data);
    fs.writeFileSync(path, rawWriteData);
}

const getPolygans = ()=> {
    return data.features;
}
module.exports = {
    getPolygans : getPolygans,
    addPolygon : addPolygon

}