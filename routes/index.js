var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//console.log(req.headers['user-agent']);	
	if (!!req.headers['user-agent'].match(/Android/)) {
		console.log("Android platform");
		 res.render('m/index', { title: 'Express' });
	}else if (!!req.headers['user-agent'].match(/Ipad/)) {
		console.log("Ipad platform");
	}else if (!!req.headers['user-agent'].match(/Windows/)) {
		console.log("Windows platform");
		 res.render('index', { title: 'Express' });
	}
 
});

module.exports = router;
