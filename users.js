// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Endpoint para crear un usuario
router.post('/create', async (req, res) => {
    try {
        // Crear un nuevo usuario con los datos enviados en el cuerpo de la petición
        const user = await User.create(req.body);
        res.status(201).send(user);  // Enviar el usuario creado como respuesta
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Hubo un problema al crear el usuario' });
    }
});

// Endpoint para obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const users = await User.find();  // Obtener todos los usuarios
        res.status(200).send(users);  // Enviar la lista de usuarios
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Hubo un problema al obtener los usuarios' });
    }
});

// Endpoint para obtener un usuario por ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);  // Buscar usuario por ID
        if (!user) {
            return res.status(404).send({ message: 'Usuario no encontrado' });
        }
        res.status(200).send(user);  // Enviar el usuario encontrado
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Hubo un problema al obtener el usuario' });
    }
});

// Endpoint para actualizar el título del usuario
router.put('/id/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id, 
            { username: req.body.username },  // Solo actualizamos el "username"
            { new: true }  // Retornar el documento actualizado
        );
        if (!user) {
            return res.status(404).send({ message: 'Usuario no encontrado' });
        }
        res.status(200).send(user);  // Enviar el usuario actualizado
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Hubo un problema al actualizar el usuario' });
    }
});

// Endpoint para eliminar un usuario por ID
router.delete('/id/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);  // Eliminar usuario por ID
        if (!user) {
            return res.status(404).send({ message: 'Usuario no encontrado' });
        }
        res.status(200).send({ message: 'Usuario eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Hubo un problema al eliminar el usuario' });
    }
});

module.exports = router;
