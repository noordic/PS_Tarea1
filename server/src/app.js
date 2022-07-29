const express= require('express')
const cors = require("cors");
const morgan= require('morgan')

const app= express()

// environmenr variables
app.set('port', process.env.PORT || 3003);
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());

app.use("/api/contactos", require("./routes/contacto.routes"));

module.exports= app;
