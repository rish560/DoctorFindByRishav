export default function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    res.status(200).json({ 
      status: 'OK', 
      message: 'DoctorFind by Rishav API is running',
      timestamp: new Date().toISOString()
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
