var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moviesSchema = new Schema({
    name :{
        type: String    
    },
    img:{
        type : String
    },
    summary: {
        type: String
    }
});

module.exports = mongoose.model('movies',moviesSchema);