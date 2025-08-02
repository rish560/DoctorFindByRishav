# DoctorFind by Rishav - Doctor Search Application

A full-stack responsive web application built with Next.js and Node.js for searching and finding doctors.

## 🚀 Project Overview

This project consists of two main parts:
- **Frontend**: Next.js application with responsive design
- **Backend**: Node.js + Express API server

## 📋 Features

### Home Page
- ✅ Hero section with search functionality
- ✅ Responsive design for all devices
- ✅ Modern gradient design
- ✅ Feature highlights section

### Doctor Listing Page
- ✅ Search results display in card/grid format
- ✅ Doctor information: name, specialty, rating, location, fee
- ✅ Star rating system
- ✅ Availability status
- ✅ Loading and error states
- ✅ No results handling

### Backend API
- ✅ GET /api/doctors → fetch all doctors
- ✅ GET /api/doctors?search=term → filtered search
- ✅ GET /api/doctors/:id → get doctor by ID
- ✅ CORS enabled for frontend integration

## 🛠️ Technologies Used

### Frontend
- Next.js 14
- React 18
- Axios for API calls
- Responsive CSS3
- Modern JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- JSON data storage
- CORS middleware

## 📁 Project Structure

```
Internship project/
├── frontend/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── SearchBar.js
│   │   └── DoctorCard.js
│   ├── pages/
│   │   ├── _app.js
│   │   ├── index.js          # Home page
│   │   └── doctors.js        # Doctor listing page
│   ├── styles/
│   │   └── globals.css
│   └── package.json
├── backend/
│   ├── data/
│   │   └── doctors.json      # Sample doctor data
│   ├── server.js
│   ├── package.json
│   └── README.md
└── README.md
```

## 🚀 How to Run

### Prerequisites
- Node.js installed
- npm or yarn package manager

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   Server will run on http://localhost:5000

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Application will run on http://localhost:3000

## 🌐 API Endpoints

- `GET /api/doctors` - Get all doctors
- `GET /api/doctors?search=term` - Search doctors by name, specialty, or location
- `GET /api/doctors/:id` - Get doctor by ID
- `GET /api/health` - Health check

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🎨 Design Features

- Modern gradient color scheme
- Card-based layout for doctors
- Smooth hover effects
- Professional typography
- Star rating system
- Availability status indicators
- Loading states and error handling

## 📊 Sample Data

The application includes 12 sample doctors with:
- Various specialties (Cardiologist, Dermatologist, Pediatrician, etc.)
- Different locations across the US
- Ratings from 4.5 to 4.9 stars
- Consultation fees ranging from $95 to $200
- Availability status (Available/Busy)

## 🔍 Search Functionality

- Search by doctor name
- Search by specialty
- Search by location
- Case-insensitive search
- Real-time results display

## 🚀 Production Deployment

### Frontend
```bash
npm run build
npm start
```

### Backend
```bash
npm start
```

## 📝 Code Quality

- Clean, well-structured code
- Separate components for reusability
- Error handling and loading states
- Responsive design principles
- Modern JavaScript practices

## 🎯 Assignment Requirements Met

✅ **Two Pages**: Home page and Doctor listing page
✅ **Next.js**: Built with Next.js framework
✅ **Responsive Design**: Works on mobile, tablet, desktop
✅ **Backend API**: Node.js + Express with required endpoints
✅ **Search Functionality**: By name, specialty, and location
✅ **Doctor Cards**: Complete information display
✅ **Clean Code**: Well-structured components
✅ **Separate Folders**: Frontend and backend in separate directories
✅ **Original Code**: All code written from scratch

## 🔗 Live Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api

**Created by: Rishav**

Both servers are currently running and ready for testing!
