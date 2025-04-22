export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      // Podés hacer algo con esos datos: guardarlos, enviarlos por email, etc.
      console.log('Mensaje recibido:', { name, email, message });
  
      return res.status(200).json({ success: true, message: 'Mensaje recibido' });
    } else {
      return res.status(405).json({ message: 'Método no permitido' });
    }
  }