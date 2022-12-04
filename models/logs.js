const mongoose = require("mongoose")


const Schema = mongoose.Schema
const logsSchema = new Schema({
    title: { type: String, required: true },
    entry: { type: String, required: true },
    shipIsBroken: {type: Boolean, default: true}
},
{
    timestamps:true
})

const model = mongoose.model
const Log = model('Log', logsSchema)

module.exports = Log