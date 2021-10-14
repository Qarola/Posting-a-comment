const { Router } = require("express");
const { getAllComments, addComment } = require("../controllers/index");

const router = Router();

// Configuramos los routers
router.get("/comments", getAllComments);
router.post("/comment", addComment);

module.exports = router;
