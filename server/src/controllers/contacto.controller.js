const Contacto = require("../models/contacto");

const contactoCtrl = {};

contactoCtrl.getContactos = async (req, res, next) => {
  console.log("aaaa");
  const contactos = await Contacto.find();
  res.json(contactos);
};

contactoCtrl.createContacto = async (req, res, next) => {
  const contacto = new Contacto({
    nombre: req.body.nombre,
    primApellido: req.body.primApellido,
    segApellido: req.body.segApellido,
    email: req.body.email,
    telefono: req.body.telefono,
  });
  await contacto.save();
  res.json({ status: "Contacto created" });
};

contactoCtrl.getContacto = async (req, res, next) => {
  try {
    //console.log("entre");
    const { id } = req.params;
    const contacto = await Contacto.findById(id);
    res.json(contacto);
  }catch (error) {
    //console.log(err);
  }
}


 

contactoCtrl.editContacto = async (req, res, next) => {
  const { id } = req.params;
  await Contacto.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Contacto Updated" });
};

contactoCtrl.deleteContacto = async (req, res, next) => {
  await Contacto.findByIdAndRemove(req.params.id);
  res.json({ status: "Contacto Deleted" });
};

module.exports = contactoCtrl;
