const express = require('express');
const cors = require('cors');
const doctorsData = require('./data/doctors.json');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://doctorfind-frontend.onrender.com',
    process.env.FRONTEND_URL
  ],
  credentials: true
}));
app.use(express.json());

// Routes
app.get('/api/doctors', (req, res) => {
  try {
    const { search } = req.query;
    
    if (!search) {
      return res.json(doctorsData);
    }
    
    const searchTerm = search.toLowerCase();
    const filteredDoctors = doctorsData.filter(doctor => 
      doctor.name.toLowerCase().includes(searchTerm) ||
      doctor.specialty.toLowerCase().includes(searchTerm) ||
      doctor.location.toLowerCase().includes(searchTerm)
    );
    
    res.json(filteredDoctors);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get doctor by ID
app.get('/api/doctors/:id', (req, res) => {
  try {
    const doctorId = parseInt(req.params.id);
    const doctor = doctorsData.find(doc => doc.id === doctorId);
    
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'DoctorFind by Rishav API is running' });
});

app.listen(PORT, () => {
  console.log(`DoctorFind by Rishav Server is running on port ${PORT}`);
});
