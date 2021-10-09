const dataDisciplina = [
  {
    id: 0,
    nome: "Programação",
    descricao: "Aula de Javascript",
    duracao: "1hr",
    vagas: 20,
  },
  {
    id: 1,
    nome: "Programação 1",
    descricao: "Aula de Javascript 1",
    duracao: "2hr",
    vagas: 50,
  },
];
// CRUD
// Create Read Update Delete
// store index/show   update     delete
// POST  GET          PUT/PATCH  DELETE
const disciplina = {
  index: (req, res) => {
    res.json({
      data: dataDisciplina,
    });
  },
  show: (req, res) => {
    const { id } = req.params;
    res.json({ data: dataDisciplina[id] });
  },
  store: (req, res) => {
    const { nome, descricao, duracao, vagas } = req.body;

    dataDisciplina.push({
      nome,
      descricao,
      duracao,
      vagas,
    });
    res.send("Disciplina cadastrada");
  },
  update: (req, res) => {
    const { id } = req.params;
    const { nome, descricao, duracao, vagas } = req.body;
    // dataDisciplina[id].nome = nome;
    // dataDisciplina[id].descricao = descricao;
    // dataDisciplina[id].duracao = duracao;
    // dataDisciplina[id].vagas = vagas;
    Object.assign(dataDisciplina[id], { nome, descricao, duracao, vagas });
    res.send("Disciplina atualizada");
  },
  delete: (req, res) => {
    const { id } = req.params;
    dataDisciplina.splice(id, 1);
    res.send("Elemento deletado");
  },
};
module.exports = disciplina;
