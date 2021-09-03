const express = require('express');
const app = express();
// const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');

const port = process.env.PORT || 9000;

// middleware
// app.use(bodyParser());

app.use(express.json());  

// mongodb connection

mongoose.connect( 
    'mongodb+srv://admin:LCGI3wTBzeMTFMDH@cluster0.9ufms.mongodb.net/emart?retryWrites=true&w=majority',
    {
    
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then(() => {
    console.log("DB CONNECTED");
});


// const db = mongoose.connection;

// db.once("open", () => {
//     console.log("DB CONNECTED");
// })

// .then(()=> {
//     console.log('Database connected');
// });


app.get('/',(req,res,next) => {
    res.status(200).json({message:"Hello from server"});
});
app.post('/data',(req,res,next) => {
    res.status(200).json({message:req.body});
});



app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})