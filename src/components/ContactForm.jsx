import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/sendContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        console.error(result.message);
      }
    } catch (error) {
      setStatus("error");
      console.error("Error al enviar:", error);
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black via-[#0f766e] to-[#0f172a] text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-transparent border border-white text-white placeholder-gray-300 p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border border-white text-white placeholder-gray-300 p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent border border-white text-white placeholder-gray-300 p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-[#0f766e] text-white font-semibold px-4 py-2 rounded hover:bg-[#0f172a] transition-colors"
        >
          Enviar
        </button>

        {status === "sending" && <p className="text-center text-yellow-300">Enviando...</p>}
        {status === "success" && <p className="text-center text-green-300">Mensaje enviado ✅</p>}
        {status === "error" && <p className="text-center text-red-400">Hubo un error ❌</p>}
      </form>
    </section>
  );
}
