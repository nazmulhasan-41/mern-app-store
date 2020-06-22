const express=require('express');
const router=express.Router();
const Item= require('../../models/Item');
const cors = require('cors');


/* 
 var whitelist = ['http://localhost:3000', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
        
      callback(null, true)
    } else {
        
      callback(new Error('Not allowed by CORS'))

    }
  }
}  */ 



router.get('/',function(req,res,next){

    console.log("IN GET METHOD.........");
     

    Item.find()
    .sort({date:-1})
    .then(items=>res.json(items));
    

}); 

router.post('/',function(req,res,next){

    console.log("IN POST METHOD.........");
    
    const newItem=new Item({
        name:req.body.name
    });
    
    newItem.save()
    .then(item=>res.json(item));
    
}); 

router.delete('/:id',(req,res)=>{

    
    
    Item.findById(req.params.id)
    .then(item=> item.remove().then(()=> res.json({success:true})));

    
    
});


/* router.delete('/:id',(req,res)=>{
    
    Item.findById(req.params.id)
        .then(item=>remove().then(()=>res.json({success:true})))
        .catch(err=>res.status(404).json({success:false}));

    

}); */ 



module.exports = router;
