const express = require("express");
const asyncHandler = require("express-async-handler");
const {Instrument, InstrumentType} = require("../../db/models")


const router = express.Router();

router.get("/", asyncHandler(async function(req, res) {
    const instruments = await Instrument.findAll();
    return res.json(instruments)
}));

router.get("/type", asyncHandler(async function(req, res) {
    const instrumentTypes = await InstrumentType.findAll();
    return res.json(instrumentTypes)
}));

module.exports = router;
