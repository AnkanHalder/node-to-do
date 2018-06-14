const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').insertOne({
    name: 'Andrew',
    age: 25,
    location: 'Philadelphia'
  }, (err, result) => {
    if (err)
    throw err;
    console.log(result.ops);

  });

  db.close();
});
