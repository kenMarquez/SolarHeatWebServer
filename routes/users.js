var express = require('express');
var router = express.Router();

const sensors = {};

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log(req.baseUrl);
    console.log(req.query);
    data = req.query;

    if (data.hasOwnProperty('tin')) {
        res.statusCode = 200;
        sensors[0] = data;
        res.json(data);
    } else {
        res.statusCode = 400;
        // res.send('Bad request');
        var error = "Estas pasando los datos mal Noe";
        res.json(error);
    }

});

/* GET users listing. */
router.get('/all', function (req, res, next) {
    res.json(sensors);
});


module.exports = router;
