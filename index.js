const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.static(path.join(__dirname)));

// Ruta principal - muestra política de privacidad
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "politica_privacidad.html"));
});

// Ruta para el trabajo práctico
app.get("/presentacion", (req, res) => {
  res.sendFile(path.join(__dirname, "presentacion.html"));
});

// Ruta alternativa para acceder directamente al trabajo práctico
app.get("/trabajo-practico", (req, res) => {
  res.sendFile(path.join(__dirname, "presentacion.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log(`- Página principal: http://localhost:${PORT}/`);
  console.log(`- Trabajo práctico: http://localhost:${PORT}/presentacion`);
  console.log(`- Trabajo práctico (alternativo): http://localhost:${PORT}/trabajo-practico`);
});
