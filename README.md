# 🏥 Hospital Management System

A complete, modern Hospital Management System with professional UI, clean architecture, and industry best practices.

## ✨ Features

### 🔐 Authentication & Authorization
- JWT-based authentication
- Role-based access control (Admin, Doctor, Receptionist, Patient)
- Secure login/register with password hashing

### 📊 Role-Specific Dashboards
- **Admin**: System overview, analytics, user management, reports
- **Doctor**: Patient list, appointments, medical records, consultation history
- **Receptionist**: Appointment scheduling, patient check-in, billing management
- **Patient**: Medical history, appointments, billing information, prescriptions

### 👥 Core Modules
- Patient Management (CRUD operations, medical history, allergies)
- Doctor Management (specialization, schedule, ratings)
- Appointment Booking & Management (scheduling, status tracking)
- Medical Records (diagnosis, prescriptions, vitals, notes)
- Billing & Payments (invoices, payment tracking, receipt generation)
- Pharmacy & Inventory (medicine stock, expiry tracking)
- Search, Filter & Pagination
- Reports & Analytics
- Notifications & Alerts
- Profile & Settings Management
- Dark/Light Mode Toggle

### 🎨 UI/UX Features
- Professional, responsive design
- Mobile-first approach
- Dark/Light theme support
- Form validation and error handling
- Loading states and animations
- Accessible components
- Intuitive navigation

## 🛠️ Tech Stack

### Frontend
- **React 18** + **Vite** (lightning-fast build)
- **Tailwind CSS** (utility-first styling)
- **Axios** (HTTP client)
- **React Router** (client-side routing)
- **Context API** (state management)
- **React Icons** (icon library)
- **date-fns** (date utilities)

### Backend
- **Node.js** + **Express.js** (server framework)
- **MongoDB** (NoSQL database)
- **Mongoose** (ODM for MongoDB)
- **JWT** (token-based authentication)
- **Bcryptjs** (password hashing)
- **Joi** (input validation)
- **CORS** (cross-origin requests)
- **Dotenv** (environment variables)

## 📋 Prerequisites

- **Node.js** v14+ ([Download](https://nodejs.org/))
- **MongoDB** v4.4+ ([Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **npm** or **yarn**
- **Git**

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/sowmyaq/hospital-management-system.git
cd hospital-management-system
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Configure .env file with your settings
# MONGODB_URI=mongodb://localhost:27017/hospital_db
# JWT_SECRET=your_super_secret_key_here
# JWT_EXPIRE=7d
# PORT=5000

# Start backend server
npm run dev
```

**Backend runs on:** `http://localhost:5000`

### 3. Frontend Setup (in another terminal)

```bash
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Configure .env file
# VITE_API_URL=http://localhost:5000/api

# Start frontend server
npm run dev
```

**Frontend runs on:** `http://localhost:5173`

## 🔑 Test Credentials

### Admin
```
Email: admin@hospital.com
Password: Admin@123
```

### Doctor
```
Email: doctor@hospital.com
Password: Doctor@123
```

### Receptionist
```
Email: receptionist@hospital.com
Password: Receptionist@123
```

### Patient
```
Email: patient@hospital.com
Password: Patient@123
```

## 📁 Project Structure

```
hospital-management-system/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js          # MongoDB connection
│   │   ├── controllers/             # Business logic
│   │   │   ├── authController.js
│   │   │   ├── patientController.js
│   │   │   ├── doctorController.js
│   │   │   ├── appointmentController.js
│   │   │   ├── recordController.js
│   │   │   ├── billingController.js
│   │   │   └── pharmacyController.js
│   │   ├── models/                  # Mongoose schemas
│   │   │   ├── User.js
│   │   │   ├── Patient.js
│   │   │   ├── Doctor.js
│   │   │   ├── Appointment.js
│   │   │   ├── MedicalRecord.js
│   │   │   ├── Billing.js
│   │   │   └── Medicine.js
│   │   ├── routes/                  # API endpoints
│   │   │   ├── authRoutes.js
│   │   │   ├── patientRoutes.js
│   │   │   ├── doctorRoutes.js
│   │   │   ├── appointmentRoutes.js
│   │   │   ├── recordRoutes.js
│   │   │   ├── billingRoutes.js
│   │   │   ├── pharmacyRoutes.js
│   │   │   └── dashboardRoutes.js
│   │   ├── middleware/
│   │   │   └── auth.js              # JWT & role middleware
│   │   ├── validators/
│   │   │   └── authValidator.js
│   │   └── app.js
│   ├── server.js
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── DarkModeToggle.jsx
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Register.jsx
│   │   │   │   └── ProtectedRoute.jsx
│   │   │   ├── Dashboard/
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   ├── DoctorDashboard.jsx
│   │   │   │   ├── ReceptionistDashboard.jsx
│   │   │   │   └── PatientDashboard.jsx
│   │   │   ├── Common/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Table.jsx
│   │   │   │   ├── Pagination.jsx
│   │   │   │   └── LoadingSpinner.jsx
│   │   │   ├── Patient/
│   │   │   │   ├── PatientList.jsx
│   │   │   │   ├── PatientForm.jsx
│   │   │   │   └── PatientDetail.jsx
│   │   │   ├── Doctor/
│   │   │   │   ├── DoctorList.jsx
│   │   │   │   ├── DoctorForm.jsx
│   │   │   │   └── DoctorDetail.jsx
│   │   │   ├── Appointment/
│   │   │   │   ├── AppointmentList.jsx
│   │   │   │   ├── AppointmentForm.jsx
│   │   │   │   └── AppointmentCalendar.jsx
│   │   │   ├── Medical/
│   │   │   │   ├── MedicalRecordList.jsx
│   │   │   │   ├── MedicalRecordForm.jsx
│   │   │   │   └── Prescription.jsx
│   │   │   ├── Billing/
│   │   │   │   ├── BillingList.jsx
│   │   │   │   ├── BillingForm.jsx
│   │   │   │   └── PaymentProcessor.jsx
│   │   │   └── Pharmacy/
│   │   │       ├── MedicineList.jsx
│   │   │       ├── MedicineForm.jsx
│   │   │       └── InventoryStatus.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Patients.jsx
│   │   │   ├── Doctors.jsx
│   │   │   ├── Appointments.jsx
│   │   │   ├── MedicalRecords.jsx
│   │   │   ├── Billing.jsx
│   │   │   ├── Pharmacy.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── NotFound.jsx
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useApi.js
│   │   │   └── useDarkMode.js
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── DarkModeContext.jsx
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   ├── formatters.js
│   │   │   ├── validators.js
│   │   │   └── constants.js
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   └── animations.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── .env.example
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── README.md
│
├── database/
│   ├── schemas.md                   # Database schema documentation
│   └── sample-data.json             # Sample data for testing
│
└── README.md (this file)
```

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register      - Register new user
POST   /api/auth/login         - Login user
GET    /api/auth/me            - Get current user
```

### Users
```
GET    /api/users              - Get all users (admin only)
GET    /api/users/:id          - Get user by ID
PUT    /api/users/:id          - Update user
```

### Patients
```
GET    /api/patients           - Get all patients (paginated)
GET    /api/patients/:id       - Get patient by ID
POST   /api/patients           - Create new patient
PUT    /api/patients/:id       - Update patient
DELETE /api/patients/:id       - Delete patient
```

### Doctors
```
GET    /api/doctors            - Get all doctors
GET    /api/doctors/:id        - Get doctor by ID
POST   /api/doctors            - Create new doctor (admin only)
PUT    /api/doctors/:id        - Update doctor
DELETE /api/doctors/:id        - Delete doctor (admin only)
```

### Appointments
```
GET    /api/appointments       - Get all appointments (paginated)
GET    /api/appointments/:id   - Get appointment by ID
POST   /api/appointments       - Book appointment
PUT    /api/appointments/:id   - Update appointment
DELETE /api/appointments/:id   - Cancel appointment
```

### Medical Records
```
GET    /api/records            - Get all records (paginated)
GET    /api/records/:id        - Get record by ID
POST   /api/records            - Create new record (doctor only)
PUT    /api/records/:id        - Update record (doctor only)
DELETE /api/records/:id        - Delete record (admin only)
```

### Billing
```
GET    /api/billing            - Get all bills (paginated)
GET    /api/billing/:id        - Get bill by ID
POST   /api/billing            - Create bill (admin/receptionist)
PUT    /api/billing/:id        - Update bill
POST   /api/billing/:id/pay    - Process payment
```

### Pharmacy
```
GET    /api/pharmacy           - Get all medicines (paginated)
GET    /api/pharmacy/:id       - Get medicine by ID
POST   /api/pharmacy           - Add medicine (admin/receptionist)
PUT    /api/pharmacy/:id       - Update medicine
DELETE /api/pharmacy/:id       - Delete medicine (admin)
```

### Dashboard
```
GET    /api/dashboard/admin    - Admin dashboard data
GET    /api/dashboard/doctor   - Doctor dashboard data
GET    /api/dashboard/patient  - Patient dashboard data
```

## 🗄️ Database Models

### User
```javascript
{
  firstName: String,
  lastName: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  role: String (admin|doctor|receptionist|patient),
  profileImage: String,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Patient
```javascript
{
  userId: ObjectId (ref: User),
  patientId: String (unique),
  dateOfBirth: Date,
  gender: String,
  bloodGroup: String,
  address: String,
  medicalHistory: [String],
  allergies: [String],
  insurance: {
    provider: String,
    policyNumber: String,
    expiryDate: Date
  },
  createdAt: Date,
  updatedAt: Date
}
```

### Doctor
```javascript
{
  userId: ObjectId (ref: User),
  specialization: String,
  licenseNumber: String (unique),
  experience: Number,
  qualifications: [String],
  consultationFee: Number,
  availableDays: [{
    day: String,
    startTime: String,
    endTime: String
  }],
  rating: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Appointment
```javascript
{
  appointmentId: String (unique),
  patientId: ObjectId (ref: Patient),
  doctorId: ObjectId (ref: Doctor),
  date: Date,
  time: String,
  reason: String,
  status: String (scheduled|completed|cancelled|no-show),
  createdAt: Date,
  updatedAt: Date
}
```

### MedicalRecord
```javascript
{
  recordId: String (unique),
  patientId: ObjectId (ref: Patient),
  doctorId: ObjectId (ref: Doctor),
  visitDate: Date,
  diagnosis: String,
  prescription: [{
    medicine: String,
    dosage: String,
    duration: String
  }],
  vitals: {
    bloodPressure: String,
    heartRate: Number,
    temperature: Number
  },
  createdAt: Date
}
```

### Billing
```javascript
{
  invoiceId: String (unique),
  patientId: ObjectId (ref: Patient),
  items: [{
    description: String,
    amount: Number,
    quantity: Number,
    total: Number
  }],
  subtotal: Number,
  tax: Number,
  discount: Number,
  total: Number,
  paidAmount: Number,
  status: String (pending|paid|partial|cancelled),
  paymentMethod: String,
  paymentDate: Date,
  createdAt: Date
}
```

### Medicine
```javascript
{
  medicineId: String (unique),
  name: String,
  genericName: String,
  manufacturer: String,
  category: String,
  unit: String,
  price: Number,
  stock: Number,
  minimumStock: Number,
  expiryDate: Date,
  usage: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🛡️ Security Features

✅ **JWT Authentication**
- Secure token-based authentication
- Token expiration (7 days default)
- Refresh token mechanism

✅ **Role-Based Access Control**
- 4 role levels: Admin, Doctor, Receptionist, Patient
- Route-level authorization
- Resource-level permissions

✅ **Password Security**
- Bcryptjs hashing (10 rounds)
- No plain-text storage
- Strong password validation

✅ **Data Protection**
- Input validation with Joi
- XSS protection
- SQL injection prevention
- CORS protection

✅ **API Security**
- Rate limiting ready
- Error logging
- Secure headers

## 🌙 Dark/Light Mode

The application includes built-in dark and light mode support:
- Toggle button in header
- Persistent preference (localStorage)
- Smooth transitions
- Accessible color contrasts

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- Touch-friendly interface
- Optimized for all screen sizes

## 📊 Features by Role

### Admin
- View system statistics
- Manage users (create, edit, delete)
- Manage doctors
- Manage receptionists
- View all appointments
- View financial reports
- Pharmacy management
- System settings

### Doctor
- View assigned appointments
- Update appointment status
- Add medical records
- View patient history
- Manage prescriptions
- View consultation earnings
- Update profile
- View notifications

### Receptionist
- Schedule appointments
- Check-in patients
- Manage billing
- Update appointment status
- View pharmacy inventory
- Generate receipts
- View notifications

### Patient
- Book appointments
- View appointment history
- Access medical records
- View prescriptions
- Check billing
- Download receipts
- Update profile
- View notifications

## 🔧 Development

### Backend Development

```bash
cd backend

# Install dev dependencies
npm install --save-dev nodemon

# Run with auto-reload
npm run dev

# Production start
npm start
```

### Frontend Development

```bash
cd frontend

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🧪 Testing Workflows

### Test User Registration
1. Open http://localhost:5173
2. Click "Register"
3. Fill in details
4. Submit
5. Login with new credentials

### Test Appointment Booking
1. Login as Patient
2. Go to "Appointments"
3. Click "Book Appointment"
4. Select Doctor and Date
5. Submit

### Test Billing
1. Login as Receptionist
2. Go to "Billing"
3. Create new bill
4. Add items
5. Process payment

## 🚀 Deployment

### Frontend Deployment (Vercel)

```bash
cd frontend
npm run build

# Deploy dist folder to Vercel
# Or connect GitHub repo to Vercel for auto-deploy
```

### Backend Deployment (Railway/Render)

```bash
# Set environment variables in hosting platform
# Deploy from GitHub repository
```

### Database

Use MongoDB Atlas for cloud database:
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create cluster
3. Get connection string
4. Update MONGODB_URI in backend .env

## 📝 Environment Variables

### Backend `.env`
```
MONGODB_URI=mongodb://localhost:27017/hospital_db
JWT_SECRET=your_super_secret_key_here
JWT_EXPIRE=7d
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### Frontend `.env`
```
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Hospital Management System
```

## ❓ Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:** Start MongoDB
```bash
# macOS
brew services start mongodb-community

# Windows
mongod
```

### CORS Error
**Solution:** Check URLs match between frontend and backend
- Backend: `VITE_API_URL=http://localhost:5000/api`
- Frontend: `CLIENT_URL=http://localhost:5173`

### Port Already in Use
```bash
# Kill process on port
lsof -ti:5000 | xargs kill -9
```

### Dependencies Installation Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Documentation

- [API Documentation](./API_DOCS.md)
- [Database Schema](./database/schemas.md)
- [Setup Guide](./SETUP_GUIDE.md)
- [Contributing Guide](./CONTRIBUTING.md)

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

## 📄 License

MIT License - Free for personal and commercial use

## 👨‍💻 Author

Created with ❤️ for hospital management needs

## 🆘 Support

For issues or questions:
1. Check documentation
2. Review existing issues
3. Create new issue with details
4. Contact maintainer

---

**Happy Coding!** 🚀

Last Updated: 2024
