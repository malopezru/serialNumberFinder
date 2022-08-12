const entity = require('../models/entity');
const entityModel = require('../models/entity')

var Access = function (){

}
//--------------------------------------------------------------------------------------------------------------------------------------------
Access.prototype.getAllItems = function (){
    const entities = []
    findAllItems(function(err, items){
        if(err)
            console.log('Error')
        else
            console.log(items)
    });
};

Access.prototype.getEntityInfo = function(serialNumber){
    findEntityInfo(serialNumber, function(err, id){
        if(id[0] == undefined)
            console.log('Entity with serial number not found')
        else
            console.log("entityId: " + id[0].id + "\n" + "DB URL: " + id[0].url)
    });
};

function findAllItems(callback){
    entityModel.find({}, callback)
}

function findEntityInfo(serial, callback){
    entityModel.find({ serialNumber: serial }, callback)
}

const data = new Access()

module.exports = data