const mongoose=require('mongoose')


const dataSchema = new mongoose.Schema({
  power:Number,
  name: String,
  img: String,

});

const Char = mongoose.model('Char', dataSchema);

module.exports = Char;