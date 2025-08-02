# Doctor Search Frontend

A responsive Next.js application for searching and finding doctors.

## Features

- 🏠 **Home Page**: Hero section with search functionality
- 🔍 **Doctor Search**: Search by name, specialty, or location
- 📱 **Responsive Design**: Works on mobile, tablet, and desktop
- 💳 **Doctor Cards**: Detailed information including ratings, fees, and availability

## Technologies Used

- Next.js 14
- React
- Axios for API calls
- CSS3 with responsive design
- Modern JavaScript (ES6+)

## Installation

1. Navigate to the frontend directory:
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

4. Open your browser and visit `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
frontend/
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── SearchBar.js
│   └── DoctorCard.js
├── pages/
│   ├── _app.js
│   ├── index.js          # Home page
│   └── doctors.js        # Doctor listing page
├── styles/
│   └── globals.css
└── package.json
```

## API Integration

The frontend connects to the backend API running on `http://localhost:5000/api`. Make sure the backend server is running before starting the frontend.

## Responsive Design

The application is fully responsive with breakpoints for:
- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px

## Features Overview

### Home Page
- Hero section with search bar
- Feature highlights
- Clean, modern design

### Doctor Listing Page
- Search results display
- Doctor cards with complete information
- Loading and error states
- No results handling
