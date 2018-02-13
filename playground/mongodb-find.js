const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');

    // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Cannot conect to do TodoApp');
    // });

    db.collection('Todos').find({completed:false}).count().then((count)=>{
        console.log(`Todos count : ${count}`);
    },(err)=>{
        console.log('Cannot conect to do TodoApp');
    });


//    client.close();
});