const express = require("express");
const router = express.Router();
const disciplinaController = require("../controllers/disciplina");

// * GET http://localhost:3000/disciplina/
router.get("/", disciplinaController.index);

// * GET http://localhost:3000/disciplina/10
router.get("/:id", disciplinaController.show);

// * POST http://localhost:3000/disciplina
router.post("/", disciplinaController.store);

// * DELETE http://localhost:3000/disciplina/10
router.delete("/:id", disciplinaController.delete);

// * PUT http://localhost:3000/disciplina/10
router.put("/:id", disciplinaController.update);

module.exports = router;
