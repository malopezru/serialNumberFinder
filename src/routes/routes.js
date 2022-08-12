const { Router } = require('express')
const router = Router();
const _ = require('underscore')
const data = require('../controller/serialNumberFinder')
const entityModel = require('../models/entity')

router.get('/', (req, res) => {
    res.send("data")
})

router.get('/:serialNumber', (req, res) => {
    const { serialNumber } = req.params
    findEntityInfo(serialNumber, function(err, id){
            if(id[0] == undefined)
                res.send('Entity with serial number not found')
            else
            res.send("entityId: " + id[0].id + ",  " + "DB URL: " + id[0].url)
        });
})

module.exports = router;




function findEntityInfo(serial, callback){
    entityModel.find({ serialNumber: serial }, callback)
}

