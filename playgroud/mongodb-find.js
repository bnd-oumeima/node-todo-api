const {MongoClient, ObjectId} = require('mongodb');
MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',{useNewUrlParser:true},(err,client)=>{
    if(err){
        // "return" to prevent the rest of function to 
        //executing if the error is handling
        return console.log('Unable to connect to mongo db server');

    }
    
     console.log('connected to mongodb server');
     const db=client.db('TodoApp');
    //--- to count the number of document in the collection user
    // db.collection('users').find().count()
    // .then((count)=>{
    //     console.log(`usercount: ${count}`);
       
        
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // })
    //****to return the document who has the id giving in params ******/
    id= new ObjectId('5b9630c55c9042131a5c1287');
    db.collection('users').find({
        _id : id
    }).toArray()
    .then((docs)=>{
        console.log('todos documents');
        console.log(JSON.stringify(docs, undefined, 2));
        
    },(err)=>{
        console.log('Unable to fetch todos',err);
    })
    /***return all documents in users collection */
    db.collection('users').find().toArray()
    .then((docs)=>{
        console.log('todos documents');
        console.log(JSON.stringify(docs, undefined, 2));
        
    },(err)=>{
        console.log('Unable to fetch todos',err);
    })
   // client.close();
});