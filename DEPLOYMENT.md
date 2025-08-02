# DoctorFind by Rishav - Deployment Guide

## Deploy to Render

### Backend Deployment
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Set environment to Node.js

### Frontend Deployment
1. Create a new Static Site on Render
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `out` or `.next`
5. Add environment variable: `NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com/api`

### Environment Variables
- NEXT_PUBLIC_API_URL: Your backend API URL from Render
