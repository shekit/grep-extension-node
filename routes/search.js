var express = require('express');
var router = express.Router();
var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
	host: 'http://localhost:9200',
	log: ['trace','error']
});

router.post('/', function(req,res,next){
	res.send('search elastic');
})

router.post('/add', function(req,res,next){
	res.send('added to index')
})


module.exports = router;