const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client)=>{
    if (err) {
      return  console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
   

    db.collection('Users').findOneAndDelete({name: 'Mike'}).then((res)=>{
            console.log(JSON.stringify(res, undefined, 2));
        }, (err)=>{
            console.log('Unable to fetch todos', err);
        });
    


 // client.close();
});