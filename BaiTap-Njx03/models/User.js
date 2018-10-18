var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/myapp');
// define a schema
var userSchema = new Schema({
    UserName: String,
    Password: String
  });

// compile our model
var User = mongoose.model('user', userSchema);

module.exports = User;