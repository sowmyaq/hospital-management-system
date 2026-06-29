import mongoose from 'mongoose';
import constants from '../constants/index.js';

const prescriptionSchema = new mongoose.Schema(
  {
    prescriptionId: {
      type: String,
      unique: true,
      required: true,
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: true,
    },
    medicines: [{
      medicineId: mongoose.Schema.Types.ObjectId,
      medicineName: String,
      dosage: String,
      frequency: String,
      duration: String,
      instructions: String,
    }],
    status: {
      type: String,
      enum: Object.values(constants.PRESCRIPTION_STATUS),
      default: constants.PRESCRIPTION_STATUS.ACTIVE,
    },
    issueDate: {
      type: Date,
      default: Date.now,
    },
    expiryDate: Date,
    notes: String,
  },
  {
    timestamps: true,
  }
);

prescriptionSchema.index({ patientId: 1 });
prescriptionSchema.index({ doctorId: 1 });
prescriptionSchema.index({ status: 1 });

const Prescription = mongoose.model('Prescription', prescriptionSchema);

export default Prescription;
