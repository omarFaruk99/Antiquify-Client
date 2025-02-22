# 🏺 Antiquify - Historical Artifacts Platform

## Project Overview
Antiquify is a full-stack web application for exploring and managing historical artifacts. The platform enables users to discover ancient treasures like the Rosetta Stone and Antikythera Mechanism, contribute their findings, and engage with history enthusiasts through an interactive interface.


## 🔗 Live Links
- **Frontend:** [Antiquify Live](https://antiquify-68162.web.app/)

## 🛠️ Technologies Used

### Frontend Stack
- React.js (with Vite)
- TailwindCSS + DaisyUI + Flowbite
- Firebase Authentication
- Axios with Interceptors
- React Query for data fetching
- React Router DOM v6

### Backend Stack
- Node.js & Express.js
- MongoDB with Mongoose
- JWT Authentication
- Cookie Parser
- CORS enabled
- Environment variables with dotenv

## ⭐ Core Features

### Frontend Features
1. **Authentication**
   - Firebase integration
   - Protected routes
   - JWT token management
   - Persistent login state

2. **User Interface**
   - Responsive design
   - Dynamic page titles
   - Loading states
   - Toast notifications
   - Custom error pages

3. **Artifact Management**
   - CRUD operations
   - Image upload
   - Like/unlike system
   - Personal collections

### Backend Features
1. **Security**
   - JWT authentication
   - HTTP-only cookies
   - CORS configuration
   - Environment variable protection

2. **API Endpoints**
   - RESTful architecture
   - Artifact CRUD operations
   - User management
   - Like system handling

3. **Database**
   - MongoDB integration
   - Efficient queries
   - Data validation
   - Error handling

## 📦 Dependencies

### Frontend Dependencies
```json
{
  "dependencies": {
    "@tanstack/react-query": "^5.8.4",
    "axios": "^1.6.2",
    "firebase": "^10.6.0",
    "react": "^18.2.0",
    "react-router-dom": "^6.19.0",
    "react-hot-toast": "^2.4.1",
    "daisyui": "^4.4.2"
  }
}
```

### Backend Dependencies
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongodb": "^6.3.0",
    "jsonwebtoken": "^9.0.2",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1"
  }
}
```

## 🚀 Local Setup Guide

### Frontend Setup
```bash
# Clone repository
git clone https://github.com/omarFaruk99/Antiquify-Client

# Install dependencies
cd antiquify-client
npm install

# Set up environment variables
# Create .env.local with:
VITE_FIREBASE_API_KEY=your_key
VITE_AUTH_DOMAIN=your_domain
VITE_API_URL=http://localhost:5173

# Start development server
npm run dev
```

### Backend Setup
```bash
# Clone repository
git clone https://github.com/omarFaruk99/Antiquify-Server

# Install dependencies
cd antiquify-server
npm install

# Set up environment variables
# Create .env with:
PORT=3000
DB_USER=your_mongodb_user
DB_PASS=your_mongodb_password
ACCESS_TOKEN_SECRET=your_jwt_secret

# Start server
npm run dev
```

## 📚 API Documentation

### Authentication Endpoints
- `POST /jwt`: Generate JWT token
- `POST /logout`: Clear authentication

### Artifact Endpoints
- `GET /artifacts`: Get all artifacts
- `GET /artifacts/top`: Get top 6 artifacts
- `GET /artifacts/details/:id`: Get single artifact
- `POST /artifacts`: Create new artifact
- `PUT /artifacts/update/:id`: Update artifact
- `DELETE /artifacts/:id`: Delete artifact
- `PUT /artifacts/:id/like`: Toggle artifact like

## 📄 License
This project is licensed under the MIT License.