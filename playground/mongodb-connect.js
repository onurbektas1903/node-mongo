// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client) => {
    if (err) {
        return console.log('Unable to connect mongo server');
    }

    var user = {name:'onur',age:25};

    var {name} = user;
    console.log('Connected MongoDb server');
    // const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text:'Something to do 2',
    //     completed:false
    // },(err,result)=>{
    //    if(err){
    //        return console.log('Unable to insert todo');
    //    }
    //    console.log(JSON.stringify(result.ops));
    // });

    const db = client.db('TodoApp');
    db.collection('Users').insertOne({
        name: 'Onur',
        age: 28,
        location: 'Ankara'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user');
        }
        console.log(JSON.stringify(result.ops));

    });

    client.close();
});