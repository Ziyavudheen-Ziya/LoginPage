const express = require('express');
const app = express();
const userRouter = require('./router/user.rouer.js');

const session = require('express-session')
const nocache = require('nocache')

app.use(nocache())


//userSession
app.use(session({
    secret:"keyboard cat",
    resave: true,
  saveUninitialized: true
}))


app.use(express.json())
app.use(express.urlencoded({extended:true}))

//UserRouter

app.use(userRouter)


app.set("view engine","ejs")


app.listen(3000,()=>{
    console.log("The server is start");
})