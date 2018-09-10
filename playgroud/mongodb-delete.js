const {MongoClient, ObjectId} = require('mongodb');
MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',{useNewUrlParser:true},(err,client)=>{
    if(err){
        // "return" to prevent the rest of function to 
        //executing if the error is handling
        return console.log('Unable to connect to mongo db server');

    }
    
     console.log('connected to mongodb server');
     const db=client.db('TodoApp');
    //deleteMony
    // db.collection('todos').deleteMany({text: 'walking the dog'}).then((res)=>{
    //     console.log(res);
    // },(err)=>{
    //     console.log(`same thing rong:${err}`);
    // })
    // // deleteOne
    // db.collection('todos').deleteOne({text: 'visiting friends'}).then((res)=>{
    //     console.log(res);
    // },(err)=>{
    //     console.log(`same thing rong:${err}`);
    // })
    //findOneandDeleted
    db.collection('todos').findOneAndDelete({completed: true}).then((res)=>{
        console.log(res);
    },(err)=>{
        console.log(`same thing rong:${err}`);
    })
   // client.close();
});