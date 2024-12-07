import dbConnection from './components/db.js';
import express from 'express';
import User from './components/signup.js';
import cors from 'cors';

const corsOptions = {
    origin: '*'
};



const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.get("/",(req,res)=>{
    dbConnection();
    res.send("Connected")
})
app.post("/create", async (req,res)=>{
    try{
    const newUser= new User({
        name: req.body.name,
        email:req.body.email,
        age:req.body.age
    });
    await newUser.save();
    const users = await User.find();
    res.status(201).json(users);
}catch{
    console.log("error");
    res.status(500).send("Error occured at creation");
}

})

app.listen(5000,()=>{
    console.log("Listening")
})