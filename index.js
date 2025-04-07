const express = require("express");
const app = express();

// Capturar campos enviados por POST
app.use(express.urlencoded({extended: true}));
app.use(express.json());



const exphbs = require("express-handlebars")
app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

app.get("/", (req,res)=> {
    res.send("Hello World!")
});


const veiculosRoutes = require("./routes/veiculoRoutes")
app.use("/veiculos", veiculosRoutes)

app.listen(8000, (err) => {
    console.log("aplicação rodandoem localhost:8000")
});