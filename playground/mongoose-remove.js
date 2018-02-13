const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/todo')

Todo.remove({}).then((res)=>{
    console.log(res);
});

// Todo.findOneAndRemove();

Todo.findByIdAndRemove('asdf').then((todo)=>{
    console.log(todo);
});