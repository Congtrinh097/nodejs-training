var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/myapp');
// define a schema
const petSchema = new Schema({
  Name: String,
  Avatar: String,
  Description: String,
  CreatedDate: Date,
  UpdatedDate: Date,
});

// compile our model
export default mongoose.model('pet', petSchema);

