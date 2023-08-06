const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 6000;
const cookieParser = require('cookie-parser');
const app = express();
const userRoutes = require('./backend/routes/userRoutes');
const globalErrorHandler = require('./backend/middleware/errorMiddleware');
const AppError = require('./backend/utils/appError');
const connectDB = require('./backend/config/db');

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', userRoutes);

if (process.env.NODE_ENV || 'production' === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, 'frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => res.send('Server is ready'));
}

app.all('*', (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server`, 404));
});
app.use(globalErrorHandler);
app.listen(PORT, () => {
  console.log('Server started at ', PORT);
});

// POST /api/users - register a User
// POST /api/users/auth - Authenticate a user and get token
// POST /api/users/logout - Logout user and clear cache
// GET /api/users/profile - Get user profile
// PUT /api/users/profile - Update Profile
