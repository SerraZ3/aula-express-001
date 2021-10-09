const express = require("express");
const router = express.Router();
const disciplinaRouter = require("./disciplina");

// * http://localhost:3000/disciplina/
router.use("/disciplina", disciplinaRouter);

// * http://localhost:3000/turma/
router.use("/turma", (req, res) => {
  res.send("Rota de turmas");
});

// * http://localhost:3000/
router.use("/", (req, res) => {
  res.send("Rota raiz");
});

module.exports = router;
