let express = require('express');

let port = process.env.PORT || 3000;

let app = express();

app.use(express.static(__dirname+'/public'));

app.get('*', function(req, res) {
    // res.send('app works!');
    res.sendFile(__dirname+'/public/index.html');
});

app.listen(port);

console.log('app is running in port '+port);