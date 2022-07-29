const express = require('express')
const router= express.Router()

const contacto = require("../controllers/contacto.controller");

router.get('/', contacto.getContactos);
router.post('/', contacto.createContacto);
router.get('/:id', contacto.getContacto);
router.put('/:id', contacto.editContacto);
router.delete('/:id', contacto.deleteContacto);

module.exports= router;

