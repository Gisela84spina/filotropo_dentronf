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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Tu email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Tu mensaje"
        value={formData.message}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Enviar
      </button>

      {status === "sending" && <p>Enviando...</p>}
      {status === "success" && <p className="text-green-600">Mensaje enviado ✅</p>}
      {status === "error" && <p className="text-red-600">Hubo un error ❌</p>}
    </form>
  );
}