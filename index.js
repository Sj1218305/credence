var express = require('express');
var properties = require('./config/properties');
var db = require('./config/database');
var moviesRoutes = require('./routes/movies');
var bodyParser = require('body-parser');
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

var app = express();

// call the database connectivity function
db();


app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// use express router
//app.use('/api',router);
//call heros routing
app.use(moviesRoutes);


app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
   next();
 });


app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`);
})


// Error handling




