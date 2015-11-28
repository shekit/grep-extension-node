var express = require('express');
var router = express.Router();

/* GET home page. */

router.post('/add', function(req,res,next){
	res.send('added')
})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
