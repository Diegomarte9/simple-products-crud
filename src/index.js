require('dotenv').config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");
const compression = require("compression");
const Rutas = require("./routes/index");

// Inicialización de express
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares de seguridad
app.use(helmet()); // Seguridad básica
app.use(cors()); // Control de acceso HTTP
app.use(compression()); // Compresión de respuestas

// Limitador de solicitudes
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100 // límite de 100 solicitudes por ventana
});
app.use(limiter);

// Logging
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Parser para JSON
app.use(express.json({ limit: '10kb' })); // Límite de tamaño para payload

// Rutas
app.get("/", function(req, res) {
    return res.json({
        message: "API REST de Productos",
        version: "1.0.0",
        status: "active"
    });
});

app.use(process.env.API_PREFIX || "/api", Rutas);

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).json({
        error: "Not Found",
        message: "La ruta solicitada no existe"
    });
});

// Manejo de errores globales
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: "Internal Server Error",
        message: process.env.NODE_ENV === 'production' 
            ? "Ha ocurrido un error en el servidor" 
            : err.message
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
    console.log(`Ambiente: ${process.env.NODE_ENV}`);
});