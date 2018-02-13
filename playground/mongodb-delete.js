const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');

    // DELETE MANY

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log(err);
    // });

    // Delete ONE

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log(err);
    // });

    // Find one and delete


    db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
        console.log(result);
    },(err)=>{
        console.log(err);
    });


//    client.close();
});