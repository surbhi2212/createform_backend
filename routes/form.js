var express = require('express');
var router = express.Router();
var pool = require("./pool");

router.post('/addusers', function(req, res, next) {

   
    pool.query("insert into createform (userid,name,,status) values(?,?,?,?,?)",[req.body.categoryid,req.body.subcategoryid,req.body.brandname,req.file.filename,req.body.status],function(error,result){
        if(error){
            console.log(error)
            res.status(500).json({result:false,msg:"Server Error..."})
        }
        else{
            res.status(200).json({result:true,msg:"submitted.."})

        }
    })
})