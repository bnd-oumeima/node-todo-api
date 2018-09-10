const {MongoClient, ObjectId} = require('mongodb');
MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',{useNewUrlParser:true},(err,client)=>{
    if(err){
        // "return" to prevent the rest of function to 
        //executing if the error is handling
        return console.log('Unable to connect to mongo db server');

    }
    console.log('connected to mongodb server');
    const db=client.db('TodoApp');
    db.collection('users').insertOne({
        name:'oumeima',
        age:25,
        location:'djerba'
    },(err, result)=>{
        if(err){
        return console.log('Unable to insert todo',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    })
    client.close();
});