const Movies = require('../models/movies');

exports.showMovies = function(req,res,next){
     Movies.find({},(err,movies) =>{
    	if(err){
    		console.log(err);
    	}
    console.log(movies);
    res.status(200).json({message:"these are the movies",movies:movies});
	})
}


