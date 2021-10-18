const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const instrumentRouter = require("./instruments.js")
const instrumentTypeRouter = require("./instruments.js")
const manufacturerRouter = require("./instruments.js")
const reviewRouter = require("./reviews.js")

router.use("/reviews", reviewRouter);
router.use("/instruments", instrumentRouter);
router.use("/type", instrumentTypeRouter);
router.use("/manufacturer", manufacturerRouter);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
