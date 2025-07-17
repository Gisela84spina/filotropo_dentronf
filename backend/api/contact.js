import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { from_name, reply_to, message } = req.body;

  // Configurar el transportador con tu cuenta de Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "calzadosbranca@gmail.com",
      pass: "dcjndhnipdrxkaxb",
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
    res.status(200).json({ success: true, message: "Mensaje enviado correctamente" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error al enviar el mensaje", error: error.message });
  }
}
