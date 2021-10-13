const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth, restoreUser } = require("../../utils/auth")
const {Instrument, InstrumentType, Manufacturer} = require("../../db/models")


const router = express.Router();

router.get("/", asyncHandler(async function(req, res) {
    const instruments = await Instrument.findAll();
    return res.json(instruments)
}));

router.get("/type", asyncHandler(async function(req, res) {
    const instrumentTypes = await InstrumentType.findAll();
    return res.json(instrumentTypes)
}));

router.get("/manufacturer", asyncHandler(async function(req, res) {
    const manufacturer = await Manufacturer.findAll();
    return res.json(manufacturer)
}));

router.post("/new", requireAuth, restoreUser, asyncHandler(async (req,res) => {
    // const {userId, manufacturerId, typeId, name, description} = req.body;
    console.log("this is the reqBody: ", req.body)
    const newInstrument = await Instrument.create(req.body);
    res.json(newInstrument)
}))

module.exports = router;
