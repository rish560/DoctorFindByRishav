# DoctorFind by Rishav - Backend

This is the backend API for the DoctorFind by Rishav application.

## Installation

```bash
npm install
```

## Running the server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

- `GET /api/doctors` - Get all doctors
- `GET /api/doctors?search=term` - Search doctors by name, specialty, or location
- `GET /api/doctors/:id` - Get doctor by ID
- `GET /api/health` - Health check

## Environment Variables

- `PORT` - Server port (default: 5000)
