const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MongoDB server');

//Delete Many
db.collection('Users').deleteMany({text:'Something to do 1'}).then((result)=>{
console.log(result);
});
//Delete Many
//Delete One
db.collection('Users').deleteOne({text:'Something to do 2'}).then((result)=>{
console.log(result);
});
//Delete One
//FindDelete
db.collection('Users').findOneAndDelete({completed:false}).then((result)=>{
console.log(result);
});
//FindDelete

//  db.close();
});
