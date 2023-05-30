const mongoose = require("mongoose")
const { Schema } = mongoose;

//Student schema
const sSchema = new Schema({
  roll: {
    type : Number,
    unique : true
  } ,
  name: String,
  dob:{
    type:Date
  } ,
  score:Number
});
module.exports = mongoose.model("Student", sSchema)
