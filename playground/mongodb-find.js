const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MongoDB server');
  db.collection('Users').find({completed:true}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch Data');
  });
//  db.close();
});
