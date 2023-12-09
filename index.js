//from  nodemon when we change our code it will restart code index,js file again


const app=require('./app');//everythings in app.js in import here
const db =require('./config/db')

const UserModel=require('./model/user.model')

const port =3000;

app.get('/',(req,res)=>{
    res.send("Hi there.................");
});

//specify the port and declare it as the function
app.listen(port,()=>{
    console.log(`server Listening on Port http://localhost:${port}`);
})
