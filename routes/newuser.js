var express = require('express');
var router = express.Router();
var pool=require("./pool")
var upload=require("./multer")

/* GET users listing. */
router.post('/saveuser',upload.single('picture'), function(req, res, next) {
    console.log(req.body)
    console.log(req.file)
  pool.query("insert into adduser(userid,name,fathername,mobile,state,city,address,picture) values(?,?,?,?,?,?,?,?)",[req.body.userid,req.body.name,req.body.fathername,req.body.mobile,req.body.state,req.body.city,req.body.address,req.myfilename],function(error,result){

   if(error)
   { console.log(error)
       res.status(500).json({result:false})
   }
   else
   {
       res.status(200).json({result:true})
   }


  })
});

router.get('/displayall',function(req,res){
    pool.query("select * from adduser",function(error,result){
        if(error)
        {
            res.status(500).json({result:[]})
        }
        else{
                console.log(JSON.stringify(result))
            res.status(200).json({result:result})
        }
    })
})

router.post('/deleteusers' ,function(req, res, next) {
    pool.query("delete from adduser where userid=?",[req.body.userid],function(error,result){
   if(error)
   {
    res.status(500).json({result:[]})
   
   }
   else
   {
       res.status(200).json({result:result})
   }

})
 })

 router.post('/edituser' ,function(req, res, next) {
    pool.query("update adduser set name=?,fathername=?,mobile=?,state=?,city=?,address=? where userid=?",[req.body.name,req.body.fathername,req.body.mobile,req.body.state,req.body.city,req.body.address,req.body.userid],function(error,result){
   if(error)
   {
    res.status(500).json({result:[]})
   
   }
   else
   {
       res.status(200).json({result:result})
   }

})
 })

module.exports = router;