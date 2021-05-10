const app = require('./app');
const mongoose = require ('mongoose')
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const serverURI = 'http://localhost:' + PORT;
const mongoURI =  process.env.MONGO_URI;


app.listen(PORT, () => console.log('server running at:' + serverURI));



mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('Connectd to DB'))