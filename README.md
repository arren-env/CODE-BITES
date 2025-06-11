# CODE BITES 🍰

A modern full-stack blogging platform where users can share tech knowledge, tutorials, and insights. Built with React and Node.js, featuring a clean, responsive design and robust authentication system.

## 🚀 Features

### Frontend Features
- **Modern UI**: Clean, responsive design with Tailwind CSS and DaisyUI
- **Dark/Light Mode**: Toggle between themes for better user experience
- **Blog Management**: Create, read, and browse blog posts
- **User Authentication**: Secure login and registration system
- **Interactive Components**: Trending posts, blog cards, and navigation
- **Responsive Design**: Optimized for desktop and mobile devices

### Backend Features
- **RESTful API**: Complete CRUD operations for blogs and users
- **JWT Authentication**: Secure authentication with access and refresh tokens
- **File Upload**: Image upload functionality for blog headers
- **Role-based Access**: Admin and customer role management
- **Input Validation**: Comprehensive data validation with Joi
- **Error Handling**: Centralized error handling system
- **Database Integration**: MongoDB with Mongoose ODM

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Multer** - File upload handling
- **Joi** - Data validation
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
CODE-BITES/
├── back-end/
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   │   └── auth/        # Authentication controllers
│   ├── middlewares/     # Express middlewares
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── services/        # Business logic services
│   ├── uploads/         # File upload directory
│   ├── validators/      # Input validation schemas
│   └── server.js        # Main server file
├── front-end/
│   ├── components/      # React components
│   ├── src/            # Main source files
│   │   ├── assets/     # Static assets
│   │   ├── App.jsx     # Main App component
│   │   └── main.jsx    # Entry point
│   └── index.html      # HTML template
└── README.md           # Project documentation
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd CODE-BITES
   ```

2. **Backend Setup**
   ```bash
   cd back-end
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../front-end
   npm install
   ```

4. **Environment Configuration**
   
   Create a `.env` file in the `back-end` directory:
   ```env
   APP_PORT=5000
   DB_URL=mongodb://localhost:27017/codebites
   JWT_SECRET=your_jwt_secret_key
   REFRESH_SECRET=your_refresh_secret_key
   APP_URL=http://localhost:5000
   DEBUG_MODE=true
   ```

5. **Start the Development Servers**
   
   Backend (from `back-end` directory):
   ```bash
   npm run dev
   ```
   
   Frontend (from `front-end` directory):
   ```bash
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/register` - User registration
- `POST /api/login` - User login
- `POST /api/logout` - User logout
- `POST /api/refresh` - Refresh access token
- `GET /api/me` - Get current user info

### Blog/Product Endpoints
- `GET /api/products` - Get all blogs
- `GET /api/products/:id` - Get single blog
- `POST /api/products` - Create new blog (Admin only)
- `PUT /api/products/:id` - Update blog (Admin only)
- `DELETE /api/products/:id` - Delete blog (Admin only)
- `POST /api/products/cart-items` - Get multiple blogs by IDs

### File Upload
- Blog creation supports image upload for header images
- Images are stored in the `uploads/` directory
- Supported formats: JPG, PNG
- Maximum file size: 5MB

## 🔐 Authentication Flow

1. **Registration**: Users can create accounts with name, email, and password
2. **Login**: Returns access token (short-lived) and refresh token (long-lived)
3. **Authorization**: Protected routes require valid JWT token in Authorization header
4. **Token Refresh**: Use refresh token to get new access token when expired
5. **Logout**: Invalidates refresh token from database

## 🎨 UI Components

### Key Components
- **NavBar**: Navigation with authentication state
- **BlogCard**: Individual blog post preview
- **CreateBlog**: Blog creation form with image upload
- **Login/Registration**: Authentication forms
- **HeaderPage**: Landing page hero section
- **TrendingPage**: Trending blog posts section
- **BlogsPage**: Grid layout for all blogs

### Styling Features
- Responsive grid layouts
- Hover animations and transitions
- Dark mode support
- Custom color scheme with orange accent
- Modern card-based design

## 🔧 Development Scripts

### Backend
```bash
npm run dev     # Start development server with nodemon
npm start       # Start production server
```

### Frontend
```bash
npm run dev     # Start Vite development server
npm run build   # Build for production
npm run preview # Preview production build
npm run lint    # Run ESLint
```

## 🚀 Deployment

### Backend Deployment
1. Set `NODE_ENV=production` in environment
2. Configure production database URL
3. Set secure JWT secrets
4. Deploy to your preferred platform (Heroku, Railway, etc.)

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Configure environment variables for API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Known Issues

- File upload validation could be enhanced
- Frontend API integration is not fully implemented
- Some components need proper error handling
- Dark mode toggle functionality needs implementation

## 🔮 Future Enhancements

- [ ] Complete frontend-backend integration
- [ ] Add comment system for blogs
- [ ] Implement blog categories and tags
- [ ] Add search functionality
- [ ] User profile management
- [ ] Blog bookmarking
- [ ] Rich text editor for blog creation
- [ ] Email verification system
- [ ] Social media sharing
- [ ] Blog analytics dashboard

## 👨‍💻 Author

Built with ❤️ by the CODE BITES team

---

**Happy Blogging! 🎉**
