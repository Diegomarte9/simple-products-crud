const productos = require("./../models/producto");

function funListarProductos(req, res) {
    return res.json({ mensaje: "Listando Productos", productos: productos });
}

function funGuardarProductos(req, res) {
    const datos = req.body;
    datos.id = productos.length + 1;
    productos.push(datos);
    return res.json({ mensaje: "Guardando Productos", producto: datos });
}

function funMostrarProductos(req, res) {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);
    if (!producto) {
        return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    return res.json({ mensaje: "Mostrando Producto", producto });
}

function funModificarProductos(req, res) {
    const id = parseInt(req.params.id);
    const datos = req.body;
    const index = productos.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    productos[index] = { ...productos[index], ...datos };
    return res.json({ mensaje: "Producto modificado", producto: productos[index] });
}

function funElimniarProductos(req, res) {
    const id = parseInt(req.params.id);
    const index = productos.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    const productoEliminado = productos.splice(index, 1)[0];
    return res.json({ mensaje: "Producto eliminado", producto: productoEliminado });
}

module.exports = {
    funListarProductos,
    funGuardarProductos,
    funMostrarProductos,
    funModificarProductos,
    funElimniarProductos
}