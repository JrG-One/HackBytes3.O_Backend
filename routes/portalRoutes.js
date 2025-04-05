const express = require("express");
const { requireAuth } = require("../middleware/auth.middleware");
const { generateAnalysis } = require("../controllers/analysisController");
const router = express.Router();

router.use(requireAuth)

//analysis route
router.post("/analysis", generateAnalysis);

module.exports = router;