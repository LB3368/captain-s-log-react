const express = require("express")
const router  = express.Router()
const Log     = require("../models/logs")


// Index info

router.get("/", (req, res) => {
    Log.find({}, (error, allLogs) => {
        if(!error) {
            res.status(200).render("Index", {
                logs: allLogs
            });
        } else {
            res.status(400).send(error);
        }
    })
})


// New inputs

router.get("/new", (req, res) => {
    res.render("New");
})


//For Deletes

router.delete("/:id", (req, res) => {
    Log.findByIdAndDelete(req.params.id, (error, data) => {
        res.redirect("/logs");
    })
})


// Makes updates

router.put("/:id", (req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false;
    Log.findByIdAndUpdate(req.params.id, req.body, (error, updatedLog) => {
        if(!error) {
            res.status(200).redirect(`/logs/${req.params.id}`); // Redirect to Index Page
        } else {
            res.status(400).send(error);
        }
    })
})


// Creates

router.post("/", (req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false;

    Log.create(req.body, (error, createdLog) => {
        if(!error) {
            res.status(200).redirect(`/logs/${createdLog._id.valueOf()}`);  // Redirect to Show route
        } else {
            res.status(400).send(error);
        }
    })
})


// For Edits

router.get("/:id/edit", (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        if(!error) {
            res.status(200).render("Edit", {log: foundLog});
        } else {
            res.status(400).send({ msg: error.message });
        }
    })
})


// Getting it to show

router.get("/:id", (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        if(!error) {
            res.status(200).render("Show", {
                log: foundLog
            });
        } else {
            res.status(400).send(error);
        }
    })
})


module.exports = router