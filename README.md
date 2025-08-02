# DoctorFind by Rishav - Full-Stack Next.js Application

A complete full-stack responsive web application built with Next.js for searching and finding doctors. This project combines both frontend and backend functionality in a single Next.js application using API routes.

## 🚀 Project Overview

This is a modern full-stack Next.js application that includes:
- **Frontend**: Responsive React pages with modern UI/UX design
- **Backend**: Next.js API routes serving doctor data and search functionality
- **Database**: JSON-based data storage with comprehensive doctor information
- **Single Deployment**: Everything runs in one Next.js application

## ✨ Live Demo

🌐 **Live Application**: [Coming Soon - Deploy to see live URL]

## 📋 Features

### 🏠 Home Page
- ✅ Hero section with professional gradient design
- ✅ Search bar for doctors by name, specialty, or location
- ✅ Feature highlights showcasing app benefits
- ✅ Responsive design for all devices
- ✅ Modern animations and hover effects

### 👨‍⚕️ Doctor Listing Page
- ✅ Search results displayed in clean card/grid format
- ✅ Comprehensive doctor information display:
  - Doctor name and specialty
  - Star rating system (★★★★☆)
  - Location and hospital affiliation
  - Consultation fees
  - Years of experience
  - Availability status (Available/Busy)
- ✅ Advanced search functionality
- ✅ Loading states and error handling
- ✅ "No results found" messaging
- ✅ Responsive grid layout

### 🔧 Backend API
- ✅ `GET /api/doctors` → fetch all doctors
- ✅ `GET /api/doctors?search=term` → filtered search by name, specialty, or location
- ✅ `GET /api/doctors/:id` → get individual doctor by ID
- ✅ `GET /api/health` → health check endpoint
- ✅ Built with Next.js API routes (serverless functions)
- ✅ JSON-based data storage with 12+ sample doctors
- ✅ CORS handling and error management

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with SSR/SSG capabilities
- **React 18** - Modern React with hooks and concurrent features
- **CSS3** - Custom responsive styling with modern design principles
- **Axios** - HTTP client for API communication
- **JavaScript ES6+** - Modern JavaScript features

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **JSON Data Storage** - Lightweight data management
- **Built-in CORS** - Cross-origin request handling
- **Error Handling** - Comprehensive error management

### Design & UX
- **Responsive Design** - Mobile-first approach
- **Modern UI/UX** - Professional gradient design
- **Component Architecture** - Reusable React components
- **Accessibility** - Screen reader friendly
- **Performance Optimized** - Fast loading and smooth interactions

## 📁 Project Structure

## 📁 Project Structure

```
DoctorFindByRishav/
├── 📂 frontend/                    # Complete Next.js Full-Stack Application
│   ├── 📂 components/              # Reusable React Components
│   │   ├── 📄 Navbar.js           # Navigation header
│   │   ├── 📄 Footer.js           # Footer component
│   │   ├── 📄 SearchBar.js        # Search input component
│   │   └── 📄 DoctorCard.js       # Doctor information card
│   ├── 📂 pages/                  # Next.js Pages & API Routes
│   │   ├── 📂 api/                # Backend API Endpoints
│   │   │   ├── 📄 doctors.js      # Main doctors API (GET /api/doctors)
│   │   │   ├── 📂 doctors/
│   │   │   │   └── 📄 [id].js     # Individual doctor API (GET /api/doctors/:id)
│   │   │   └── 📄 health.js       # Health check API (GET /api/health)
│   │   ├── 📄 _app.js             # Next.js app configuration
│   │   ├── 📄 index.js            # Home page (/)
│   │   └── 📄 doctors.js          # Doctor listing page (/doctors)
│   ├── 📂 data/
│   │   └── 📄 doctors.json        # Sample doctor data (12 doctors)
│   ├── 📂 styles/
│   │   └── 📄 globals.css         # Global CSS styles
│   ├── 📄 package.json            # Dependencies and scripts
│   ├── 📄 next.config.js          # Next.js configuration
│   └── 📄 .env.example            # Environment variables template
├── 📄 README.md                   # Project documentation
├── 📄 DEPLOYMENT.md               # Deployment instructions
└── 📄 .gitignore                  # Git ignore rules
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** - For cloning the repository

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/rish560/DoctorFindByRishav.git
   cd DoctorFindByRishav
   ```

2. **Navigate to the application directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   - 🌐 **Application**: http://localhost:3000
   - 🔍 **API Health Check**: http://localhost:3000/api/health
   - 📋 **API Doctors List**: http://localhost:3000/api/doctors

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🌐 API Documentation

### Base URL
- **Development**: `http://localhost:3000/api`
- **Production**: `https://your-app.onrender.com/api`

### Endpoints

#### 🏥 Get All Doctors
```http
GET /api/doctors
```
**Response**: Array of all doctors with complete information

#### 🔍 Search Doctors
```http
GET /api/doctors?search={query}
```
**Parameters**: 
- `search` (string): Search term for name, specialty, or location

**Example**: `/api/doctors?search=cardiologist`

#### 👨‍⚕️ Get Doctor by ID
```http
GET /api/doctors/{id}
```
**Parameters**: 
- `id` (number): Doctor's unique identifier

**Example**: `/api/doctors/1`

#### ❤️ Health Check
```http
GET /api/health
```
**Response**: API status and timestamp

### Sample Doctor Object
```json
{
  "id": 1,
  "name": "Dr. Sarah Johnson",
  "specialty": "Cardiologist",
  "rating": 4.8,
  "location": "New York, NY",
  "consultationFee": 150,
  "experience": "15 years",
  "availability": "Available",
  "hospital": "Mount Sinai Hospital"
}
```

## 📱 Responsive Design

The application is fully responsive and optimized for all devices:

- 📱 **Mobile**: < 480px (Optimized for smartphones)
- 📲 **Tablet**: 480px - 768px (iPad and tablet devices)
- 💻 **Desktop**: > 768px (Laptop and desktop screens)
- 🖥️ **Large Desktop**: > 1200px (Wide screens and monitors)

### Key Responsive Features
- ✅ Flexible grid layouts that adapt to screen size
- ✅ Touch-friendly buttons and interactive elements
- ✅ Optimized typography for readability on all devices
- ✅ Mobile-first CSS approach
- ✅ Smooth animations and transitions

## 🎨 Design Features

- **Modern Gradient Design** - Professional purple-blue gradient color scheme
- **Card-Based Layout** - Clean, organized doctor information cards
- **Smooth Animations** - Hover effects and transitions for better UX
- **Professional Typography** - Easy-to-read fonts and proper spacing
- **Star Rating System** - Visual rating display with actual stars (★★★★☆)
- **Status Indicators** - Color-coded availability status (Available/Busy)
- **Loading States** - User-friendly loading indicators
- **Error Handling** - Graceful error messages and fallbacks

## � Sample Data

The application includes **12 diverse doctors** across various specialties:

### Specialties Available
- 🫀 **Cardiologist** (2 doctors)
- 🧴 **Dermatologist** (2 doctors)  
- 👶 **Pediatrician** (2 doctors)
- 🦴 **Orthopedic Surgeon** (2 doctors)
- 🧠 **Neurologist** (1 doctor)
- 👩‍⚕️ **Gynecologist** (1 doctor)
- 🧠 **Psychiatrist** (1 doctor)
- 👁️ **Ophthalmologist** (1 doctor)

### Geographic Coverage
**Major US Cities**: New York, Los Angeles, Chicago, Houston, San Francisco, Miami, Boston, Seattle, Phoenix, Denver, Atlanta, Dallas

### Data Quality
- ✅ **Realistic Information** - Professional names, actual hospitals, realistic fees
- ✅ **Diverse Ratings** - 4.5 to 4.9 star ratings for quality doctors
- ✅ **Varied Pricing** - Consultation fees from $95 to $200
- ✅ **Mixed Availability** - Both available and busy doctors
- ✅ **Experience Range** - 9 to 20 years of medical experience

## 🔍 Search Functionality

### Advanced Search Capabilities
- **Name Search** - Find doctors by first name, last name, or full name
- **Specialty Search** - Search by medical specialty (case-insensitive)
- **Location Search** - Find doctors by city, state, or region
- **Partial Matching** - Smart search that finds partial matches
- **Real-time Results** - Instant search results as you type
- **No Results Handling** - Helpful messages when no matches found

### Search Examples
```
"Sarah" → Finds Dr. Sarah Johnson
"cardiologist" → Finds all cardiologists
"New York" → Finds doctors in New York, NY
"Pediatric" → Finds pediatricians
```

## 🚀 Deployment

### Quick Deploy to Render

1. **Fork/Clone this repository**
2. **Go to [Render.com](https://render.com)**
3. **Create a new "Web Service"**
4. **Connect your GitHub repository**
5. **Configure deployment settings:**
   ```
   Name: doctorfind-by-rishav
   Root Directory: frontend
   Environment: Node
   Build Command: npm install && npm run build
   Start Command: npm start
   ```
6. **Deploy and get your live URL!**

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Other Deployment Options
- **Vercel** - Perfect for Next.js apps
- **Netlify** - Great for static sites with API functions
- **Heroku** - Traditional cloud platform
- **AWS/GCP/Azure** - Enterprise cloud solutions

## 📝 Code Quality & Best Practices

### Development Standards
- ✅ **Clean Code Architecture** - Well-organized, readable code structure
- ✅ **Component-Based Design** - Reusable React components
- ✅ **Separation of Concerns** - Clear separation between frontend and API logic
- ✅ **Error Handling** - Comprehensive error management throughout the app
- ✅ **Responsive Design** - Mobile-first, adaptive layouts
- ✅ **Performance Optimized** - Fast loading times and smooth interactions
- ✅ **SEO Friendly** - Next.js SSR capabilities for better search engine optimization

### Code Organization
- **Modular Components** - Each component has a single responsibility
- **Consistent Styling** - Uniform design patterns and CSS structure
- **API Route Organization** - RESTful API design with proper HTTP methods
- **Data Management** - Efficient data handling and state management
- **Git Best Practices** - Clear commit messages and version control

## 🎯 Assignment Requirements Compliance

This project was built as part of a technical assignment and meets all specified requirements:

### ✅ **Core Requirements Met**
- **Two Pages** - Home page with search functionality + Doctor listing page with results
- **Next.js Framework** - Built entirely with Next.js 14 and React 18
- **Responsive Design** - Fully responsive across mobile, tablet, and desktop devices
- **Backend APIs** - Complete API implementation using Next.js API routes
- **Search Functionality** - Advanced search by name, specialty, and location
- **Doctor Cards** - Professional card layout with all required information
- **Clean Code Structure** - Well-organized, maintainable codebase
- **Separate Components** - Modular React component architecture

### 🏆 **Additional Features Implemented**
- **Full-Stack Integration** - Combined frontend and backend in single Next.js app
- **Professional UI/UX** - Modern gradient design with smooth animations
- **Error Handling** - Comprehensive error states and loading indicators
- **SEO Optimization** - Next.js SSR capabilities for better search engine indexing
- **Performance** - Optimized for fast loading and smooth user experience
- **Accessibility** - Screen reader friendly and keyboard navigation support

## � License

This project is created for educational and assignment purposes. Feel free to use it as a reference for learning Next.js full-stack development.

## 🤝 Contributing

While this is primarily an assignment project, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

## 📞 Contact

**Created by: Rishav**

- 📧 **Email**: [Your Email]
- 💼 **LinkedIn**: [Your LinkedIn Profile]
- 🐙 **GitHub**: https://github.com/rish560
- 🌐 **Portfolio**: [Your Portfolio Website]

---

## 🎉 **Project Status: Complete & Ready for Production**

**✅ All Requirements Met**  
**✅ Fully Functional Application**  
**✅ Professional Code Quality**  
**✅ Ready for Deployment**  
**✅ Documentation Complete**

**⭐ Star this repository if you found it helpful!**

---

*Built with ❤️ using Next.js, React, and modern web technologies*
