import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    patientId: {
      type: String,
      unique: true,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: [true, 'Date of birth is required'],
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: true,
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
      default: null,
    },
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      pincode: String,
    },
    emergencyContact: {
      name: String,
      relationship: String,
      phone: String,
    },
    insuranceProvider: {
      type: String,
      default: null,
    },
    insurancePolicyNumber: {
      type: String,
      default: null,
    },
    medicalHistory: [{
      condition: String,
      diagnosisDate: Date,
      status: String,
    }],
    allergies: [String],
    currentMedications: [String],
  },
  {
    timestamps: true,
  }
);

patientSchema.index({ userId: 1 });
patientSchema.index({ patientId: 1 });

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
