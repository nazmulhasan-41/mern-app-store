const express =require('express');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const cors = require('cors');
var router=express.Router();


const path=require('path');


const port=process.env.PORT||5000;

const items =require('./routes/api/items');

const app=express();

app.use(cors());

app.use(bodyParser.json());
 


 mongoose.connect("mongodb+srv://jewel41:jewel41@cluster0-wkjzn.mongodb.net/test?retryWrites=true&w=majority"
            ,{useUnifiedTopology: true, useNewUrlParser: true });
    
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
      // we're connected!
      
    });



app.use('/api/items',items);

 
if(process.env.NODE_ENV==='production')
{

  console.log("----------------------------->>>");
  app.use(express.static('myclient/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'myclient','build','index.html'));

  });
} 

app.listen(port,()=> console.log(`server started at..... ${port}`));

