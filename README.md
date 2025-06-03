# API REST de Productos

Esta es una API REST simple desarrollada con Node.js y Express que permite gestionar un catálogo de productos en memoria.

## Descripción

El proyecto implementa un CRUD (Create, Read, Update, Delete) completo para gestionar productos. Los datos se mantienen en memoria, lo que significa que se resetearán cada vez que se reinicie el servidor.

## Estructura del Proyecto

```
api_rest_node/
├── src/
│   ├── controllers/
│   │   └── producto.controller.js   # Lógica de negocio
│   ├── models/
│   │   └── producto.js             # Modelo de datos
│   ├── routes/
│   │   └── index.js               # Definición de rutas
│   └── index.js                   # Punto de entrada de la aplicación
└── package.json
```

## Arquitectura

El proyecto sigue una arquitectura MVC (Modelo-Vista-Controlador) simplificada:

- **Modelos**: Definen la estructura de datos de los productos
- **Controladores**: Manejan la lógica de negocio para cada operación
- **Rutas**: Definen los endpoints de la API y conectan las peticiones con los controladores

## Requisitos

- Node.js (versión recomendada: 14.x o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona el repositorio
2. Instala las dependencias:
```bash
npm install
```

## Uso

Para iniciar el servidor en modo desarrollo:
```bash
npm run dev
```

El servidor se iniciará en `http://localhost:3000`

## Endpoints

### Productos

- **GET /api/productos**
  - Lista todos los productos
  - Respuesta: Array de productos

- **POST /api/productos**
  - Crea un nuevo producto
  - Body: 
    ```json
    {
        "nombre": "string",
        "precio": number,
        "stock": number,
        "imagen": "string",
        "descripcion": "string"
    }
    ```

- **GET /api/productos/:id**
  - Obtiene un producto específico por ID
  - Respuesta: Objeto producto

- **PUT /api/productos/:id**
  - Actualiza un producto existente
  - Body: Los campos que deseas actualizar

- **DELETE /api/productos/:id**
  - Elimina un producto

## Ejemplo de Producto

```json
{
    "id": 1,
    "nombre": "TECLADO",
    "precio": 659.98,
    "stock": 13,
    "imagen": "teclado.jpg",
    "descripcion": "Teclado mecánico RGB"
}
```

## Notas

- Los datos se almacenan en memoria, por lo que se resetearán al reiniciar el servidor
- La API incluye validación básica de datos
- Los IDs se generan automáticamente al crear nuevos productos

## Autor

Diego Marte
