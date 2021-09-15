const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
const env = require('dotenv');
const cors = require('cors');



env.config();

const port = process.env.PORT || 9000;

// Routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const productRoutes = require('./routes/product')




// middleware

app.use(cors());
app.use(express.json());  
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', productRoutes);

// mongodb connection

mongoose.connect( 
    'mongodb+srv://admin:LCGI3wTBzeMTFMDH@cluster0.9ufms.mongodb.net/emart?retryWrites=true&w=majority',
    {
    
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true
}
).then(() => {
    console.log("DB CONNECTED");
});






app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})