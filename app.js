var express = require('express');
var todoController = require('./controllers/todoControll');

var app = express();


// template engine
app.set('view engine', 'ejs');

// static files

app.use(express.static('./public'));

//fire controller
todoController(app);



app.listen(3000, ()=>{
    console.log('You are listening to port 3000');
});
