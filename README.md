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
├── .env.development              # Variables de entorno para desarrollo
├── .env.production              # Variables de entorno para producción
├── .env.example                # Ejemplo de variables de entorno
├── render.yaml                 # Configuración para Render
└── package.json
```

## Arquitectura

El proyecto sigue una arquitectura MVC (Modelo-Vista-Controlador) simplificada:

- **Modelos**: Definen la estructura de datos de los productos
- **Controladores**: Manejan la lógica de negocio para cada operación
- **Rutas**: Definen los endpoints de la API y conectan las peticiones con los controladores

## Requisitos

- Node.js (versión recomendada: 18.x o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Diegomarte9/simple-products-crud.git
cd simple-products-crud
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env.development
```

## Uso en Desarrollo

Para iniciar el servidor en modo desarrollo:
```bash
npm run dev
```

El servidor se iniciará en `http://localhost:3000`

## Despliegue en Producción (Render)

1. Crear una nueva aplicación web en Render
2. Conectar con el repositorio de GitHub
3. Configurar las variables de entorno en Render:
   - `NODE_ENV=production`
   - `PORT=3000`
   - `API_PREFIX=/api`

4. Usar los siguientes comandos para el despliegue:
   - Build Command: `npm install`
   - Start Command: `npm start`

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
- La API incluye rate limiting y medidas de seguridad básicas
- En producción, los mensajes de error son genéricos por seguridad
- En desarrollo, se muestran mensajes de error detallados

## Seguridad

La API implementa varias medidas de seguridad:
- Helmet para cabeceras HTTP seguras
- Rate limiting para prevenir ataques de fuerza bruta
- Validación de datos de entrada
- Compresión de respuestas
- CORS configurado
- Límite de tamaño en payloads JSON

## Autor

Diego Marte
