var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/hello2', function (req, res, next) {
  res.send('hello world');
});

/* GET users listing. */
router.get('/hello3', function (req, res, next) {
  return "hello4"
});

module.exports = router;
