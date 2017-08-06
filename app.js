var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function () {
    console.log('app listening on ', port);
});

app.post('/addition', function (req, res) {
    var sum = parseInt(req.body.x) + parseInt(req.body.y);
    res.send(sum.toString());
});
app.post('/subtract', function (req, res) {
    var difference = parseInt(req.body.x) - parseInt(req.body.y);
    res.send(difference.toString());
});
app.post('/multiply', function (req, res) {
    var product = parseInt(req.body.x) * parseInt(req.body.y);
    res.send(product.toString());
});
app.post('/divide', function (req, res) {
    var quotient = parseInt(req.body.x) / parseInt(req.body.y);
    res.send(quotient.toString());
});