var express = require('express'),
    path = require('path'),
    cons = require('consolidate'),
    app = express();

var root = path.join(__dirname, '../'),
    viewDir = path.join(root, 'views'),
    assetsDir = path.join(root, 'client');

app.engine('html', cons.dot);
app.set('views', viewDir);
app.set('view engine', 'html');

app.use(express.static(assetsDir));

app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(3000, function() {
  console.log('Express server listening http://%s:%s',
    server.address().address,
    server.address().port);
});
