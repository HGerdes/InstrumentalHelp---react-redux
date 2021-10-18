const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Instrument, Review } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
  ];

  router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { email, password, username } = req.body;
      const user = await User.signup({ email, username, password });

      await setTokenCookie(res, user);

      return res.json({
        user,
      });
    }),
  );

router.get("/:id/reviews", asyncHandler(async(req, res) => {
  const userId = req.params.id;
  const comments = await Review.findAll({
    where: {
      userId
    },
    include: User
  });
  return res.json(comments)
}));

router.get("/", asyncHandler(async(req, res) => {
  const user = await User.findAll();
  return res.json(user)
}));

router.get("/:id", asyncHandler(async(req, res) => {
  const userId = req.params.id;
  const user = await User.getCurrentUserById(userId)
  return res.json(user)
}));


module.exports = router;
