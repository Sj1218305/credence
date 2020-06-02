var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moviesSchema = new Schema({
    name :{
        type: String,
    },
    image:{
        type : String,
    },
    description : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('movies',moviesSchema);