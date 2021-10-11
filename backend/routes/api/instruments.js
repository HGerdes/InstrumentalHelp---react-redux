const express = require("express");
const asyncHandler = require("express-async-handler");
const {Instrument} = require("../../db/models")

const router = express.Router();

router.get("/", asyncHandler(async function(req, res) {
    
}));
