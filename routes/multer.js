var multer=require('multer')
const { v4: uuidv4 } = require('uuid');
var serverpath=multer.diskStorage({
 destination:(req,file,path)=>{
 
  path(null,"public/images");
 
 },
 
 filename:(req,file,path)=>{
  var  newfilename=uuidv4()+file.originalname.substring(file.originalname.lastIndexOf("."))
    req['myfilename']=newfilename
    path(null,newfilename)

 }});
 
var upload=multer({storage:serverpath})
module.exports=upload
