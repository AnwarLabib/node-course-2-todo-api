const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');

var id = '5a82efd42ffc7e4c6fd03367rony';

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}

Todo.find({
    _id : id
}).then((todos)=>{
    console.log(todos);
});

Todo.findOne({
    _id : id
}).then((todo)=>{
    console.log(todo);
});

Todo.findById(id).then((todo,e)=>{
    if(!todo){
        return console.log('ID not found')
    }
    console.log(todo);
}).catch((e) => console.log(e));
