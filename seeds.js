const mongoose = require("mongoose")
const Log = require("./models/logs")

mongoose.connect(process.env.MONGO_URI, {                                   
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})


mongoose.connection.once("open", () => {                                    
    console.log("connected to mongo")
});

const seedLog = [
    {
        title: "Star Date 4837",
        entry: "No new encounters in this sector",
        shipIsBroken: false
    },
    {
        title: "Star Date 4838",
        entry: "Came across a new star.",
        shipIsBroken: false
    },
    {
        title: "Star Date 4839",
        entry: "Performing standard engine checks.",
        shipIsBroken: false
    },
    {
        title: "Star Date 4840",
        entry: "Performing crew training exercises.",
        shipIsBroken: false
    },
    {
        title: "Star Date 4841",
        entry: "Checking life support functions.",
        shipIsBroken: false
    },
    {
        title: "Star Date 4842",
        entry: "Performing ship supplies check. Supplies running low.",
        shipIsBroken: false
    },
    {
        title: "Star Date 4843",
        entry: "Performing maintenance check of surface shuttle.",
        shipIsBroken: false
    },
    {
        title: "Star Date 4844",
        entry: "Shuttle maintenance detected fuel and oxygen issues.",
        shipIsBroken: true
    },
    {
        title: "Star Date 4845",
        entry: "Meeting up with Voyager to get replacement parts for shuttle.",
        shipIsBroken: true
    },
    {
        title: "Star Date 4846",
        entry: "Voyager encounter problems. Late meeting us with parts.",
        shipIsBroken: true
    },
    {
        title: "Star Date 4847",
        entry: "Scottie working on seeing if there is a bypass.",
        shipIsBroken: true
    },
    {
        title: "Star Date 4848",
        entry: "Scottie was able to bypass the oxygen sensors and running the life support with the engine.",
        shipIsBroken: false
    },
    {
        title: "Star Date 4849",
        entry: "Decide it's to risky to try.",
        shipIsBroken: true
    },
    {
        title: "Star Date 4850",
        entry: "Voyager finally arrives with our needed replacement parts and supplies.",
        shipIsBroken: false
    }
]

const seedDB = async () => {
    await Log.insertMany({ seedLog })
}

seedDB().then(() => {
    mongoose.connection.close()
})

module.exports= seedLog






