const express=require('express');
const route=express.Router();
var Char=require('../model/model')

route.post('/api/charcters', async (req, res) => {
    try {
        console.log('Received JSON payload:', req.body);
  
        const newData = new Char(req.body);
  
        console.log('New data object:', newData);
  
        await newData.save();
  
        console.log('Data saved successfully.');
  
        res.send(newData)
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while creating the data.' });
    }
  });
route.get('/api/charcters',(req,res)=>{
   Char.find()
   .then(data => {res.send(data)})
   .catch(err => {res.status(500).send(err)})
});
route.put('/api/charcters/:id',(req,res)=>{
const id = req.params.id; 

Char.findByIdAndUpdate(id,req.body,{new:true})
.then(data => {
    res.send(data)
})
.catch(err=>{
    res.status(500).send(err)
})
});
route.delete('/api/charcters/:id',(req,res)=>{
    const id =req.params.id;
    Char.findByIdAndDelete(id)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
});

module.exports=route;