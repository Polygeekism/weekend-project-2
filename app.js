var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, function(){
    console.log('app listening on ', port);
});

app.post('/addition', function(req, res){
    console.log(req.body);
    var sum = parseInt(req.body.x) + parseInt(req.body.y);
    console.log('the sum is' + sum);
    res.send(sum.toString());
});