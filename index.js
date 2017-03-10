var express = require('express');
var multer = require('multer'),
    bodyParser = require('body-parser'),
    path = require('path');

var app = new express();
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.render('index');
});

app.post('/', multer().single('upl'), function(req,res){
	res.json({
        size: req.file.size
    });
});

app.listen(process.env.PORT || 8080, function() {
    console.log("Listening on Port: " + (process.env.PORT || 8080));
})