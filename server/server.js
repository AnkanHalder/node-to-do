var express =require('express');
var bodyParser=require('body-parser');
var {ObjectID}=require('mongodb');


var {mongoose}=require('./db/mongoose.js');
var {Todo}=require('./models/todo.js');
var {users}=require('./models/users.js');

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  console.log(req.body.text);
  var todo=new Todo({
    text:req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });

});

app.get('/todos',(req,res)=>{

  Todo.find().then((todos)=>{
    res.send({todos});
    console.log(todos);
  },(e)=>{
    res.status(400).send(e);
      console.log(e);
  });
});

//Users Post Request
app.post('/users',(req,res)=>{
  console.log(`${req.body.email}`);

  var user=new users({
    email:req.body.email
  });

  user.save().then((doc)=>{
    res.send({doc});
  },(e)=>{
    res.status(400).send(e);
  });

});

//Users Get request

app.get('/users',(req,res)=>{

  users.find().then((users)=>{
    res.send({users});
    console.log(user);
  },(e)=>{
    res.status(400).send(e);
      console.log(e);
  });
});

//-------------------
app.get('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  });
});

app.listen(3000,()=>{
  console.log('Server is up and running at port 3000');
});
