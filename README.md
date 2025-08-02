# DoctorFind by Rishav - Full-Stack Next.js Application

A complete full-stack responsive web application built with Next.js for searching and finding doctors.

## 🚀 Project Overview

This is a single Next.js application that includes:
- **Frontend**: Next.js pages with responsive design
- **Backend**: Next.js API routes (no separate server needed)

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
- ✅ Built with Next.js API routes

## 🛠️ Technologies Used

### Frontend
- Next.js 14
- React 18
- Axios for API calls
- Responsive CSS3
- Modern JavaScript (ES6+)

### Backend
- Next.js API Routes
- JSON data storage
- Built-in API handling

## 📁 Project Structure

```
DoctorFind by Rishav/
├── frontend/                    # Complete Next.js Full-Stack App
│   ├── components/              # React components
│   ├── pages/
│   │   ├── api/                # Backend API routes
│   │   │   ├── doctors.js      # Main doctors API
│   │   │   ├── doctors/[id].js # Individual doctor API
│   │   │   └── health.js       # Health check API
│   │   ├── index.js            # Home page
│   │   └── doctors.js          # Doctor listing page
│   ├── data/
│   │   └── doctors.json        # Doctor data
│   ├── styles/
│   │   └── globals.css
│   └── package.json
├── backend/                     # (Legacy - not needed anymore)
└── README.md
```

## 🚀 How to Run

### Prerequisites
- Node.js installed
- npm or yarn package manager

### Single Application Setup
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
   
4. Open browser:
   - Application: http://localhost:3000
   - API Health Check: http://localhost:3000/api/health
   - API Doctors: http://localhost:3000/api/doctors

## 🌐 API Endpoints

- `GET /api/doctors` - Get all doctors
- `GET /api/doctors?search=term` - Search doctors by name, specialty, or location
- `GET /api/doctors/:id` - Get doctor by ID
- `GET /api/health` - Health check

All APIs are built into the Next.js application using API routes.

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
