const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth, restoreUser } = require("../../utils/auth")
const {Review} = require("../../db/models")

const router = express.Router();

router.get("/", restoreUser, asyncHandler(async function(req, res) {
    const reviews = await Review.findAll();
    return res.json(reviews)
}));

router.get()

router.get("/:instrumentId", restoreUser, asyncHandler(async function(req, res) {
    let {instrumentId} = req.params;

    const reviews = await Review.findAll({
        where: {
            instrumentId: instrumentId
        }
    })

    return res.json(reviews)
}));

router.post("/:id/new", requireAuth, restoreUser, asyncHandler(async (req, res) => {
    const newReview = await Review.create(req.body);
    return res.json(newReview);
}));

module.exports = router;
