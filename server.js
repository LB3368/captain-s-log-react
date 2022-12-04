require('dotenv').config();                                                 
const express = require('express');                                          
const app = express();                                                      
const PORT = 3000;                                                          
const reactViews = require('express-react-views')                           
const mongoose = require("mongoose");                                       
const Log = require("./models/logs");                                      
const methodOverride = require('method-override');   
const logController = require('./controllers/logControllers')                     

// Activating MonGoose
const mongoURI = process.env.MONGO_URI
const database = mongoose.connection

// Connection to DataBase
mongoose.connect(mongoURI, {                                   
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})

mongoose.connection.once("open", () => {                                    
    console.log("connected to mongo")
})


// Creating a View Engine

app.set('views', './views')                                               
app.set('view engine', 'jsx')                                             

app.engine("jsx", reactViews.createEngine())


// Creates Middleware

app.use(express.urlencoded({ extended: false }))                  
app.use(methodOverride('_method'))                                 

// Define/Mount middleware to process HTTP requests:
app.use((req, res, next) => {

    next()
})

app.get('/', function (req, res) {                                          
    res.send("<h1>Captain's Log!</h1>")
})

app.get("/logs", (req, res) => {                                          
    
    Log.find({}, (error, allLogs) => {
        if (!error) {
            res.status(200).render("Index", {                               
                logs: allLogs
            })
        } else {
            res.status(400).send(error)
        }
    })
})


app.get("/logs/new", (req, res) => {                                       
    res.render("New")                                                     
})


app.delete("/logs/:id", (req, res) => {
    Log.findByIdAndDelete(req.params.id, (err, data) => {
    
        res.redirect("/logs")
    })
})

app.post("/logs", (req, res) => {                                          
    if (req.body.shipIsBroken === "on") {                                   
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }

    Log.create(req.body, (error, createdLog) => {                           
                                
        res.redirect("/logs");                                              
    })
})

app.get("/logs/:id", (req, res) => {                                        
    Log.findById(req.params.id, (error, logData) => {
                                                       
        if(!error) {
            res.status(200).render("Show", {                                
                log:logData
            })
        } else {
            res.status(400).send(error)
        }
    })
})



app.listen(PORT, () => {                                                   
    console.log('listening on port', PORT);
})