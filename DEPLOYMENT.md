# DoctorFind by Rishav - Simple Render Deployment

## Single Next.js App Deployment to Render

### Easy One-Click Deployment

1. **Create Web Service on Render**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository: "DoctorFindByRishav"

2. **Configure Deployment**
   ```
   Name: doctorfind-by-rishav
   Root Directory: frontend
   Environment: Node
   Build Command: npm install && npm run build
   Start Command: npm start
   ```

3. **Deploy**
   - Click "Create Web Service"
   - Wait 5-10 minutes for deployment
   - Your app will be live at: https://doctorfind-by-rishav.onrender.com

### That's it! 🎉

No separate backend deployment needed - everything runs in one Next.js app!
