var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/heatmap', function(req, res, next) {
  res.render('heatmap', {  });
});

router.get('/tabs', function(req, res, next) {
  res.render('tabs', {  });
});

module.exports = router;
