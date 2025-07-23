import nodemailer from "nodemailer";
import cors from "cors";

// CORS middleware
const corsHandler = cors();

export default async function handler(req, res) {
  return new Promise((resolve, reject) => {
    corsHandler(req, res, async () => {
      if (req.method === "OPTIONS") {
        res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        res.status(200).end();
        return resolve();
      }

      if (req.method !== "POST") {
        res.status(405).json({ message: "Método no permitido" });
        return resolve();
      }

      const { from_name, reply_to, message } = req.body;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

      const mailOptions = {
        from: reply_to,
        to: process.env.MAIL_USER,
        subject: `Mensaje de ${from_name}`,
        text: message,
      };

      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Mensaje enviado con éxito" });
      } catch (error) {
        console.error("Error al enviar el correo:", error);
        res.status(500).json({ message: "Error al enviar el mensaje" });
      }

      return resolve();
    });
  });
}
