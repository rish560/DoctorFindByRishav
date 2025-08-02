import doctorsData from '../../data/doctors.json';

export default function handler(req, res) {
  const { method, query } = req;

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'GET') {
    try {
      const { search } = query;
      
      if (!search) {
        return res.status(200).json(doctorsData);
      }
      
      const searchTerm = search.toLowerCase();
      const filteredDoctors = doctorsData.filter(doctor => 
        doctor.name.toLowerCase().includes(searchTerm) ||
        doctor.specialty.toLowerCase().includes(searchTerm) ||
        doctor.location.toLowerCase().includes(searchTerm)
      );
      
      res.status(200).json(filteredDoctors);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
