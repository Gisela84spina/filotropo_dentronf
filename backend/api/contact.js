import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedOrigins = [
  "https://filotropo-dentronf.vercel.app",
  "http://localhost:5173",
];

export default async function handler(req, res) {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { from_name, reply_to, message } = req.body || {};

  if (!from_name || !reply_to || !message) {
    return res.status(400).json({ message: "Faltan campos obligatorios" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(reply_to)) {
    return res.status(400).json({ message: "Email inválido" });
  }
  if (from_name.length > 100 || message.length > 2000) {
    return res.status(400).json({ message: "Texto demasiado largo" });
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO],
      replyTo: reply_to,
      subject: `Mensaje de ${from_name}`,
      text: `Nombre: ${from_name}\nEmail: ${reply_to}\n\n${message}`,
    });

    if (error) {
      console.error("Error de Resend:", error);
      return res.status(500).json({ message: "Error al enviar el mensaje" });
    }

    return res.status(200).json({ message: "Mensaje enviado con éxito" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return res.status(500).json({ message: "Error al enviar el mensaje" });
  }
}