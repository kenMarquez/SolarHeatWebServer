var express = require('express');
var router = express.Router();

const sensors = {};

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* GET users listing. */
router.get('/sensors', function (req, res, next) {
    console.log(req.baseUrl);
    console.log(req.query);
    data = req.query;

    if (data.hasOwnProperty('tin')) {
        res.statusCode = 200;
        sensors[0] = data;
        res.json(data);
    } else {
        res.statusCode = 200;
        // res.send('Bad request');
        var error = "Estas pasando los datos mal Noe";
        res.json(error);
    }

});

/* GET users list ing. */
router.get('/sensors/data', function (req, res, next) {
    if (sensors[0] == null || sensors[0] == undefined) {
        res.statusCode = 404;
        var error = "No hay datos";
        res.json(error);
    }
    {
        res.statusCode = 200;
        res.json(sensors[0]);
    }

});

module.exports = router;
