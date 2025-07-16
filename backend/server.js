const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

console.log("🟢 Backend arrancado: este es el server.js que estás ejecutando");

const app = express();
const PORT = 4000;

// Middleware para permitir requests desde otros orígenes
app.use(cors());

// Middleware para parsear JSON en el body de las peticiones
app.use(express.json());

app.use((req, res, next) => {
  console.log(`🌟 ${req.method} ${req.url}`);
  next();
});


// Ruta POST para recibir mensajes del formulario
/*app.post("/contact", (req, res) => {
  const { from_name, reply_to, message } = req.body;

  console.log("📨 Nuevo mensaje recibido:");
  console.log("Nombre:", from_name);
  console.log("Email:", reply_to);
  console.log("Mensaje:", message);

  // Acá podrías guardar en base de datos, enviar un email, etc.

  res.status(200).json({ success: true, message: "Mensaje recibido correctamente" });
});
*/


app.post("/contact", async (req, res) => {
  console.log("📨 Petición POST /contact recibida");
  console.log("Cuerpo recibido:", req.body);
  const { from_name, reply_to, message } = req.body;

  // Configurar el transportador con tu cuenta de Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "calzadosbranca@gmail.com",         
      pass: "dcjndhnipdrxkaxb",  // cree Portfolio con Gmail con 2 pasos
    },
  });
 
  const mailOptions = {
    from: `"Portfolio Web" <calzadosbranca@gmail.com>`, 
    to: "calzadosbranca@gmail.com", 
    subject: "Nuevo mensaje desde tu portfolio",
    html: `
      <h3>Nuevo mensaje recibido</h3>
      <p><strong>Nombre:</strong> ${from_name}</p>
      <p><strong>Email:</strong> ${reply_to}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Correo enviado");
    res.status(200).json({ success: true, message: "Mensaje enviado correctamente" });
  } catch (error) {
    console.error("❌ Error al enviar correo:", error);
    res.status(500).json({ success: false, message: "Error al enviar el mensaje", error: error.message });
  }
});

//Levantar el servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
}); 