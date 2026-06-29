# Hospital Management System

A complete, modern Hospital Management System built with React + Vite + Tailwind CSS (Frontend) and Node.js + Express.js + MongoDB (Backend). Features role-based access control, appointment booking, medical records management, billing, and more.

## 📋 Features

### Authentication & Authorization
- ✅ Secure JWT-based authentication
- ✅ Role-based access control (Admin, Doctor, Receptionist, Patient)
- ✅ Secure password hashing with bcrypt
- ✅ Token refresh mechanism

### User Management
- ✅ User registration and login
- ✅ Profile management with image upload
- ✅ Role-specific dashboards
- ✅ User settings and preferences

### Patient Management
- ✅ Patient registration and profiles
- ✅ Medical history tracking
- ✅ Health records management
- ✅ Patient search and filtering
- ✅ Insurance information

### Doctor Management
- ✅ Doctor profiles and specialization
- ✅ Doctor availability scheduling
- ✅ Consultation history
- ✅ Doctor performance metrics

### Appointment System
- ✅ Appointment booking and scheduling
- ✅ Appointment cancellation
- ✅ Appointment rescheduling
- ✅ Calendar view with availability
- ✅ Email/SMS notifications
- ✅ Appointment status tracking

### Medical Records
- ✅ Prescription management
- ✅ Lab reports
- ✅ Medical test records
- ✅ Document upload and storage
- ✅ Medical history timeline

### Pharmacy & Inventory
- ✅ Medicine inventory management
- ✅ Medicine search with filters
- ✅ Stock tracking
- ✅ Medicine reorder alerts
- ✅ Medicine categorization

### Billing & Payments
- ✅ Invoice generation
- ✅ Payment gateway integration
- ✅ Payment history
- ✅ Billing reports
- ✅ Multiple payment methods

### Dashboard & Analytics
- ✅ Role-specific dashboards
- ✅ Key metrics and statistics
- ✅ Charts and graphs
- ✅ Reports and analytics
- ✅ Data export functionality

### UI/UX Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light mode toggle
- ✅ Modern Tailwind CSS styling
- ✅ Smooth animations and transitions
- ✅ Accessibility features

### Additional Features
- ✅ Search functionality
- ✅ Advanced filtering
- ✅ Pagination
- ✅ Notifications system
- ✅ Activity logging
- ✅ Error handling and validation

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool for fast development
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Redux/Context API** - State management
- **React Query** - Server state management
- **React Hook Form** - Form management
- **Chart.js / Recharts** - Data visualization
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload
- **Nodemailer** - Email service
- **Joi** - Input validation
- **Dotenv** - Environment configuration
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger

## 📁 Project Structure

```
hospital-management-system/
├── frontend/                 # React + Vite application
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/            # Page components
│   │   ├── layouts/          # Layout components
│   │   ├── services/         # API services
│   │   ├── store/            # Redux/Context state
│   │   ├── hooks/            # Custom hooks
│   │   ├── utils/            # Utility functions
│   │   ├── styles/           # Global styles
│   │   ├── constants/        # Constants
│   │   ├── types/            # TypeScript types
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/               # Static assets
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
├── backend/                  # Node.js + Express application
│   ├── src/
│   │   ├── models/           # Mongoose models
│   │   ├── controllers/      # Route controllers
│   │   ├── routes/           # API routes
│   │   ├── middleware/       # Custom middleware
│   │   ├── services/         # Business logic
│   │   ├── validators/       # Input validators
│   │   ├── config/           # Configuration files
│   │   ├── utils/            # Utility functions
│   │   ├── constants/        # Constants
│   │   ├── seeders/          # Database seeders
│   │   └── server.js         # Entry point
│   ├── uploads/              # File storage
│   ├── logs/                 # Application logs
│   ├── .env.example
│   └── package.json
│
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables**
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/hospital_management
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRE=7d
   NODE_ENV=development
   ```

5. **Seed the database (optional)**
   ```bash
   npm run seed
   ```

6. **Start the backend server**
   ```bash
   npm run dev
   ```

   Backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables**
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

   Frontend will run on `http://localhost:5173`

## 📚 API Documentation

### Authentication Endpoints

#### Register
```http
POST /api/auth/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "phone": "+1234567890",
  "role": "patient"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

#### Refresh Token
```http
POST /api/auth/refresh-token
Authorization: Bearer <refresh_token>
```

### User Endpoints

#### Get Profile
```http
GET /api/users/profile
Authorization: Bearer <token>
```

#### Update Profile
```http
PUT /api/users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1234567890"
}
```

### Patient Endpoints

#### Get All Patients
```http
GET /api/patients?page=1&limit=10&search=john
Authorization: Bearer <token>
```

#### Get Patient by ID
```http
GET /api/patients/:id
Authorization: Bearer <token>
```

#### Create Patient
```http
POST /api/patients
Authorization: Bearer <token>
Content-Type: application/json
```

#### Update Patient
```http
PUT /api/patients/:id
Authorization: Bearer <token>
Content-Type: application/json
```

### Appointment Endpoints

#### Get All Appointments
```http
GET /api/appointments?page=1&limit=10&status=pending
Authorization: Bearer <token>
```

#### Book Appointment
```http
POST /api/appointments
Authorization: Bearer <token>
Content-Type: application/json

{
  "patientId": "patient_id",
  "doctorId": "doctor_id",
  "appointmentDate": "2024-07-15",
  "appointmentTime": "14:00",
  "reason": "Routine checkup"
}
```

#### Cancel Appointment
```http
PUT /api/appointments/:id/cancel
Authorization: Bearer <token>
```

### Doctor Endpoints

#### Get All Doctors
```http
GET /api/doctors?page=1&limit=10&specialization=cardiology
Authorization: Bearer <token>
```

#### Get Doctor by ID
```http
GET /api/doctors/:id
Authorization: Bearer <token>
```

### Pharmacy Endpoints

#### Get All Medicines
```http
GET /api/medicines?page=1&limit=10&category=antibiotics
Authorization: Bearer <token>
```

#### Search Medicines
```http
GET /api/medicines/search?q=paracetamol
Authorization: Bearer <token>
```

### Billing Endpoints

#### Get Invoices
```http
GET /api/invoices?page=1&limit=10
Authorization: Bearer <token>
```

#### Create Invoice
```http
POST /api/invoices
Authorization: Bearer <token>
Content-Type: application/json
```

#### Process Payment
```http
POST /api/payments
Authorization: Bearer <token>
Content-Type: application/json
```

## 🔐 Authentication

All protected routes require a JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

### User Roles

1. **Admin** - Full system access, user management, analytics
2. **Doctor** - Patient management, appointment handling, prescriptions
3. **Receptionist** - Appointment scheduling, patient check-in, basic management
4. **Patient** - View own records, book appointments, manage prescriptions

## 📝 Sample User Credentials

### Admin
- Email: `admin@hospital.com`
- Password: `Admin123!`

### Doctor
- Email: `doctor@hospital.com`
- Password: `Doctor123!`

### Receptionist
- Email: `receptionist@hospital.com`
- Password: `Receptionist123!`

### Patient
- Email: `patient@hospital.com`
- Password: `Patient123!`

## 🎨 UI Components

The frontend includes reusable components:

- **Buttons** - Primary, secondary, danger variants
- **Forms** - Input, textarea, select, checkbox, radio
- **Cards** - Information cards with various layouts
- **Tables** - Sortable, filterable, paginated tables
- **Modals** - Confirmation, form, and alert modals
- **Navbars** - Responsive navigation with role-based menus
- **Sidebars** - Collapsible sidebars with route links
- **Alerts** - Success, error, warning notifications
- **Loaders** - Loading spinners and skeletons
- **Charts** - Various chart types for analytics
- **Filters** - Advanced filtering components
- **Search** - Search with suggestions

## 🔍 Search & Filtering

- **Global Search** - Search across patients, doctors, medicines
- **Advanced Filters** - Filter by multiple criteria
- **Pagination** - Efficient data loading
- **Sorting** - Sort by various columns

## 📊 Reports & Analytics

- **Dashboard Metrics** - Key performance indicators
- **Charts** - Bar, line, pie charts for data visualization
- **Reports** - Comprehensive reports for admin and management
- **Data Export** - Export data in CSV/PDF formats

## 🌙 Dark/Light Mode

- Theme toggle in settings
- Persistent theme preference
- System theme detection
- Smooth transitions between themes

## 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interfaces
- Flexible layouts

## ✅ Input Validation

- Client-side validation with React Hook Form
- Server-side validation with Joi
- Real-time error messages
- Password strength indicators
- Email verification

## 🛡️ Security Features

- JWT token-based authentication
- Password hashing with bcryptjs
- CORS protection
- Rate limiting
- Input sanitization
- SQL/NoSQL injection prevention
- XSS protection
- CSRF protection

## 📧 Notifications

- Email notifications for appointments
- SMS notifications (integration ready)
- In-app notifications
- Notification preferences
- Notification history

## 🔄 State Management

- Context API for global state
- Redux for complex state (optional)
- React Query for server state
- Local storage for persistence

## 🧪 Error Handling

- Comprehensive error handling
- User-friendly error messages
- Error logging and tracking
- Fallback UI components
- Error boundary implementation

## 📦 Deployment

### Backend Deployment (Heroku, AWS, DigitalOcean)

1. Create `.env` file with production variables
2. Deploy to your hosting platform
3. Set up MongoDB Atlas for cloud database

### Frontend Deployment (Vercel, Netlify)

1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set production API URL in environment variables

## 🚦 Running in Production

```bash
# Backend
cd backend
npm install
npm run build
npm start

# Frontend
cd frontend
npm install
npm run build
# Serve dist folder with static server
```

## 📝 License

MIT License - feel free to use this project for personal or commercial use.

## 🤝 Contributing

Contributions are welcome! Please follow the coding standards and create a pull request.

## 📧 Support

For support, email support@hospital-management.com or open an issue on GitHub.

## 🎯 Future Enhancements

- [ ] Video consultation feature
- [ ] AI-powered symptom checker
- [ ] Mobile app (React Native)
- [ ] Advanced analytics with machine learning
- [ ] Telemedicine integration
- [ ] Insurance claims management
- [ ] Multi-language support
- [ ] Advanced scheduling algorithms
- [ ] Patient portal with health records download
- [ ] Integration with hospital equipment

## 📞 Contact

Created with ❤️ for better healthcare management.

Version: 1.0.0
Last Updated: June 2024
