const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth, restoreUser } = require("../../utils/auth")
const {Review} = require("../../db/models")

const router = express.Router();

router.get("/", restoreUser, asyncHandler(async function(req, res) {
    const reviews = await Review.findAll();
    return res.json(reviews)
}))

router.get(":instrumentId", restoreUser, asyncHandler(async function(req, res) {
    let {instrumentId} = req.params;

    const reviews = await Review.findAll({
        where: {
            instrumentId: instrumentId
        }
    })

    res.json(reviews)
}))

module.exports = router;
