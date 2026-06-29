import mongoose from 'mongoose';
import constants from '../constants/index.js';

const invoiceSchema = new mongoose.Schema(
  {
    invoiceId: {
      type: String,
      unique: true,
      required: true,
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: true,
    },
    appointmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment',
    },
    services: [{
      serviceName: String,
      quantity: Number,
      rate: Number,
      amount: Number,
    }],
    medicines: [{
      medicineId: mongoose.Schema.Types.ObjectId,
      medicineName: String,
      quantity: Number,
      rate: Number,
      amount: Number,
    }],
    subtotal: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    paidAmount: {
      type: Number,
      default: 0,
    },
    remainingAmount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'partial', 'completed'],
      default: 'pending',
    },
    invoiceDate: {
      type: Date,
      default: Date.now,
    },
    dueDate: Date,
    notes: String,
  },
  {
    timestamps: true,
  }
);

invoiceSchema.index({ patientId: 1 });
invoiceSchema.index({ invoiceId: 1 });
invoiceSchema.index({ paymentStatus: 1 });

const Invoice = mongoose.model('Invoice', invoiceSchema);

export default Invoice;
