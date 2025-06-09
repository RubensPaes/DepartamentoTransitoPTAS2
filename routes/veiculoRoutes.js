const router = require("express").Router(); 

const VeiculoController = require("../controllers/veiculoController")

 router.post("/cadastro", VeiculoController.cadastrar);

 router.get("/buscar/:id?", VeiculoController.buscar);

 module.exports = router;