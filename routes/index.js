var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(req.query.id);
  res.render('index', { title: 'Express' });
});

router.get('/:id', function(req, res, next) {
  var chartId = req.params.id;
  res.render(chartId, {});
});

router.get('/tabs', function(req, res, next) {
  res.render('tabs', {  });
});

module.exports = router;
