const mongoosa =require('mongoose');

const connection = mongoosa.createConnection('mongodb://localhost:27017/newToD').on('open',()=>{
    console.log("MongoDb Connected");
}).on('error',()=>{
    console.log("error");
});

module.exports=connection;