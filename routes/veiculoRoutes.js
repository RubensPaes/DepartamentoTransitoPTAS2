const router = require("express").Router();
const UsuarioController = require("../controllers/UsuarioController") 

const VeiculoController = require("../controllers/veiculoController")

 router.post("/cadastro", UsuarioController.verificaAutenticacao,VeiculoController.cadastrar);

 router.get("/buscar/:id?", UsuarioController.verificaAutenticacao, UsuarioController.verificaIsAdmin,VeiculoController.buscar);

 module.exports = router;