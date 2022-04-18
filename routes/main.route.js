const express = require("express");
const router = express.Router();
const mainRouter = require("../controllers/main.controller");

router.get("/", mainRouter.getTest);
router.post("/", mainRouter.postTest);
router.delete("/", mainRouter.deleteTest);

module.exports = router;
