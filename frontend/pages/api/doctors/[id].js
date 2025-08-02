import doctorsData from '../../../data/doctors.json';

export default function handler(req, res) {
  const { method, query } = req;

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'GET') {
    try {
      const doctorId = parseInt(query.id);
      const doctor = doctorsData.find(doc => doc.id === doctorId);
      
      if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found' });
      }
      
      res.status(200).json(doctor);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
