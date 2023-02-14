const express=require("express");
const app=express();
const conn=require("./config/db");
const Users=require('./models/user');
const dotenv=require("dotenv");
const UserRoutes=require('./Routes/userRoutes')


dotenv.config({path:'./config/config.env'});


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api',UserRoutes);


app.get('/',(req,res)=>{
    return res.send("working")
})



app.listen(process.env.PORT,(e)=>{
    console.log("Server runing !!")
})


