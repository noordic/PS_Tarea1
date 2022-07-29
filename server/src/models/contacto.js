const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactoSchema = new Schema(
  {
    nombre: { type: String, required: true },
    primApellido: { type: String, required: true },
    segApellido: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: String, required: true },
    flag: {type: Boolean, required: false},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Contacto", contactoSchema);