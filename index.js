var express = require('express'); 
var app = express();
var path = require('path');

app.set('port',process.env.PORT||8080);
app.set("views", path.resolve(__dirname, "views"));
app.set('view engine', 'ejs');
// //Using Staic resources

app.use(express.static(__dirname + '/public'));

 app.get('/', function(req, res){ 
 res.render('index'); 
 });

app.get('/assistant.ejs', function(req, res){ 
	res.render('assistant'); 
});

app.get('/forum.ejs', function(req, res){ 
	res.render('forum'); 
});

app.get('/login.ejs', function(req, res){ 
	res.render('login'); 
});
app.get('/signup.ejs', function(req, res){ 
	res.render('signup'); 
});

app.listen(app.get('port'));
console.log("Server started at port... " +app.get('port'));