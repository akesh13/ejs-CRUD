const express = require('express')
const cors = require('cors')
const  cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const config = require('./db')
const PORT = 5600;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());
app.use(cookieParser());

mongoose.Promise = global.Promise;
mongoose.connect(config.dbHost, {useNewUrlParser: true}, (err) => {
    if(err) throw err;
    console.log(`mongodb connected succesfully`);
});

app.set("view engine", "ejs");
app.set("views", "./view");

app.use("/", require('./route/userRoute'));

app.listen(PORT, () => {
    console.log(`server is running in @http://localhost:${PORT}`)
})