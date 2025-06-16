const express = require("express");
const app = express();

// Capturar campos enviados por POST
app.use(express.urlencoded({extended: true}));
app.use(express.json());



const exphbs = require("express-handlebars")
app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

app.get("/", (req,res)=> {
    res.render("home")
   // res.send("Hello World!")
});


const veiculosRoutes = require("./routes/veiculoRoutes")
app.use("/veiculos", veiculosRoutes)

const UsuariosRoutes = require("./routes/UsuarioRoutes.js")
app.use("/usuarios", usuarioRoutes)

app.listen(8000, (err) => {
    console.log("aplicação rodandoem localhost:8000")
});