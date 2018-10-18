var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/myapp');
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
var Pet = mongoose.model('pet', petSchema);

module.exports = Pet;