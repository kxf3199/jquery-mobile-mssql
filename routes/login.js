var express = require('express');
var router = express.Router();

var config_db=require('./../public/javascripts/config.js');
var mssql_hander=require('./../public/javascripts/db/db_mssql');

/* GET users listing. */
router.get('/', function(req, res, next) {
	if (!!req.headers['user-agent'].match(/Android/)) {
		console.log("Android platform");
		 res.render('./m/login', { title: 'Express',registResult: 'null1' });
	}else if (!!req.headers['user-agent'].match(/Ipad/)) {
		console.log("Ipad platform");
	}else if (!!req.headers['user-agent'].match(/Windows/)) {
		console.log("Windows platform");
		 res.render('login', { title: 'Express' });
	}
});

/* POST users listing. */
router.post('/', function(req, res, next) {
	var bodyData=req.body;
	console.log(bodyData);
	if (bodyData.func==="注册") {
		console.log(bodyData);
		var strSql="insert into DW_R_USER "
		var insertField="(D_ID,D_USERNAME,D_PASSWORD)";
        var insertValue="Values (";
        insertValue+="1,'"+bodyData.name+"',";
        insertValue+="'"+bodyData.password+"')";
        var sqlText=strSql+insertField+insertValue;
        console.log(sqlText);
        mssql_hander.initConfigObj(config_db.get_db_cfg());
		mssql_hander.transact(sqlText,function(err,rs){
            if (err) {
                res.end("failed");
            }else
            {
            	 res.end("successed");
            }
        });
        
        
	}else
	{
		res.end('respond with a resource');
	}
  
});

module.exports = router;
