const Movies = require('../models/movies');

exports.showMovies = async (req,res,next) => {
    const movies = await Movies.find();
    res.status(200).json({message:"these are the movies",movies:movies});
}