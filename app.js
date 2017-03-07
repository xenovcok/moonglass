const express = require('express');
const app = express();
const path = require('path');

app.use('/view', express.static(__dirname + '/views'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname+'/view/index.html'));
});


app.listen(3000, function(){
	console.log('server listening port 3000');
})