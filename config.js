// config/config.js
require('dotenv').config();  // Cargar variables desde el archivo .env
const mongoose = require('mongoose');

// Función para conectar a la base de datos
const dbConnection = async () => {
    try {
        // Imprime la URL de la base de datos para verificar que la variable está cargada correctamente
        console.log('Conectando a:', process.env.MONGO_URL);  
        await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        throw new Error('Error al iniciar la base de datos');
    }
};

module.exports = { dbConnection };
