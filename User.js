// models/User.js
const mongoose = require('mongoose');

// Definición del esquema para un usuario
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });  // Esto agrega los campos createdAt y updatedAt automáticamente

// Crear el modelo con el esquema definido
const User = mongoose.model('User', UserSchema);

module.exports = User;
