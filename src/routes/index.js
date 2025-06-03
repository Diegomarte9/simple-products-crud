const express = require("express");
const Route = express.Router();
const productoController = require("./../controllers/producto.controller")


Route.get("/productos", productoController.funListarProductos);
Route.post("/productos", productoController.funGuardarProductos);
Route.get("/productos/:id", productoController.funMostrarProductos);
Route.put("/productos/:id", productoController.funModificarProductos);
Route.delete("/productos/:id", productoController.funElimniarProductos);


module.exports = Route;