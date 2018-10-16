var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// define a schema
var petSchema = new Schema({
    Id: String,
    Name: String,
    Avatar: String,
    Description: String,
    CreatedDate: Date,
    UpdatedDate: Date
  });

// compile our model
var Person = mongoose.model('pet', petSchema);

module.exports = Person;