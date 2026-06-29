import mongoose from 'mongoose';
import constants from '../constants/index.js';

const appointmentSchema = new mongoose.Schema(
  {
    appointmentId: {
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
    appointmentDate: {
      type: Date,
      required: [true, 'Appointment date is required'],
    },
    appointmentTime: {
      type: String,
      required: [true, 'Appointment time is required'],
    },
    reason: {
      type: String,
      required: [true, 'Reason for appointment is required'],
    },
    status: {
      type: String,
      enum: Object.values(constants.APPOINTMENT_STATUS),
      default: constants.APPOINTMENT_STATUS.PENDING,
    },
    notes: String,
    consultationFee: Number,
    cancellationReason: String,
    cancelledBy: String, // 'patient' or 'doctor'
    cancelledAt: Date,
  },
  {
    timestamps: true,
  }
);

appointmentSchema.index({ patientId: 1 });
appointmentSchema.index({ doctorId: 1 });
appointmentSchema.index({ appointmentDate: 1 });
appointmentSchema.index({ status: 1 });

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
