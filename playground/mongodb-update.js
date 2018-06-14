const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MongoDB server');
db.collection('Users').findOneAndUpdate({
  _id:new ObjectID('5b223d90f01e8b1ff8657e88')
},{
  $set:{completed:true}
},{
  returnOriginal: false
}).then((result)=>{
  console.log(result);
});
//  db.close();
});
