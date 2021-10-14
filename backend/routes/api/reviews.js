const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth, restoreUser } = require("../../utils/auth")
const {Review} = require("../../db/models")

const router = express.Router();

router.get("/", asyncHandler(async function(req, res) {
    const reviews = await Review.findAll();
    return res.json(reviews)
}))

module.exports = router;
