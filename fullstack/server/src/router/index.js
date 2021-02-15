const router = require("express").Router();
router.use("/book", require("./BookRouter"));

module.exports  = router;