const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({text:'Eat lunch'},
    // {
    //     $set : {
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result)
    // });

    db.collection('Users').findOneAndUpdate({name:'Anwar Labib'},
    {
        $set : {
            name:'Rony'
        },
        $inc : {
            age:1
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result)
    });


//    client.close();
});