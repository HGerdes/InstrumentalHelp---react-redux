const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth, restoreUser } = require("../../utils/auth")
const {Instrument, InstrumentType, Manufacturer} = require("../../db/models")
const {Review} = require("../../db/models")

const router = express.Router();

router.get("/", asyncHandler(async function(req, res) {
    const instruments = await Instrument.findAll({
        include: Review
    }
);


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

router.get("/:id", asyncHandler(async function(req, res) {
    let {id} = req.params
    const instrument = await Instrument.findByPk(id)
    return res.json(instrument)
}));

router.post("/new", requireAuth, restoreUser, asyncHandler(async (req, res) => {
    // const {userId, manufacturerId, typeId, name, description} = req.body;
    const newInstrument = await Instrument.create(req.body);
    return res.json(newInstrument);
}));

// router.get("/:id/edit", requireAuth, restoreUser, asyncHandler(async(req, res) => {
//     let {id} = req.params
//     const editInstrument = await Instrument.findByPk(id)
//     return res.json(editInstrument);
// }));

router.patch("/:id/edit", requireAuth, restoreUser, asyncHandler(async(req, res) => {
    let {id} = req.params
    const instrumentEdit = await Instrument.findByPk(id)
    const instrument = req.body;
    await instrumentEdit.update(instrument);
    return res.json(instrumentEdit)
}));

router.delete("/:id/delete", requireAuth, restoreUser, asyncHandler(async (req, res) => {
    let { id } = req.params;
    const instrument = await Instrument.findByPk(id);
    await instrument.destroy();

    return res.json(instrument)
}));

module.exports = router;
