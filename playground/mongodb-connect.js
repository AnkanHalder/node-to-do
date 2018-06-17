const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').insertOne({
    email:'abcde1@gmail.com'
  }, (err, result) => {
    if (err)
    throw err;
    console.log(result.ops);

  });

  db.close();
});
