const express = require("express")
const Rutas = require("./routes/index");

// app express
const app = express()
const PORT=3000;

// req.body
app.use(express.json());

// rutas
app.get("/", function(peticion, respuesta){
    console.log("METODO: ",peticion.method, "PAIS: ", peticion.query.pais);
    return respuesta.send("<h1>Hola, Bienvenidos a mi Api Rest</h1>");
});

app.get("/saludo", function(req, res){
    return res.json({mensaje: "Hola, Saludos"});
});

app.use("/api", Rutas)

app.listen(PORT, function(){
    console.log("Servidor iniciado en http://localhost:"+PORT)
})