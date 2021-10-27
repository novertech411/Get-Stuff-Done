var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//mongoose.connect('mongodb+srv://test:test@cluster0.endsq.mongodb.net/todo?retryWrites=true&w=majority');

//var todoSchema = new mongoose.Schema({
 //  item: String
//});

//var Todo = mongoose.model('Todo', todoSchema);
//var itemOne = Todo({item: 'Code More Every Day'}).save(function(err){
 //  if (err) throw err;
 //  console.log('item saved');
//});

var data = [{item: '2 hours of prayer'}, {item: 'host the app'},{item:'4 hours of coding'} ]
var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){

    app.get('/todo', function(req, res){
  res.render('todo', {todos: data}); 
    });


    app.post('/todo', function(req, res){
      
    });
    app.delete('/todo/:item', function(req, res){
     
      });

}