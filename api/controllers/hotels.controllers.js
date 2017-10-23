var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {
    console.log("GET the hotels");
    console.log(req.query); 

    var offsets = 0;
    var count = 5;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }

    if (req.query && req.query.count) {
        offset = parseInt(req.query.count, 10);
    }

    var returnData = hotelData.slice(offset, offset + count);

    res
        .status(200)
        .json( {returnData} );
};

module.exports.hotelsGetOne = function(req, res) {
    var hotelID = req.params.hotelID;
    var thisHotel = hotelData[hotelID];
    console.log("GET hotelID", hotelID);
    res
        .status(200)
        .json( {thisHotel} );
};