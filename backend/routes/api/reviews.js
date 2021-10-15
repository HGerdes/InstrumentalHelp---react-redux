const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth, restoreUser } = require("../../utils/auth")
const {Review} = require("../../db/models")

const router = express.Router();

router.get("/", restoreUser, asyncHandler(async function(req, res) {
    const reviews = await Review.findAll();
    return res.json(reviews)
}));


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

router.put("/:id/edit", requireAuth, restoreUser, asyncHandler(async (req, res) => {
    let {id} = req.params
    const reviewEdit = await Review.findByPk(id);
    const review = req.body;
    await reviewEdit.update(review);
    return res.json(reviewEdit)
}));

router.delete("/:id", requireAuth, restoreUser, asyncHandler(async (req, res) => {
    let {id} = req.params;
    const review = await Review.findByPk(id);
    review.destroy();

    return res.json(review)
}));

module.exports = router;
