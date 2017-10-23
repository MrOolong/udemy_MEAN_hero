var express = require('express');
var router = express.Router();

router
    .route('/hotels')
    .get(function(req, res){
        console.log("GET the json");
        res
        .status(200)
        .json( {"jsonData" : true} );
    });
    
module.exports = router;