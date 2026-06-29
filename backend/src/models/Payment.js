import mongoose from 'mongoose';
import constants from '../constants/index.js';

const paymentSchema = new mongoose.Schema(
  {
    paymentId: {
      type: String,
      unique: true,
      required: true,
    },
    invoiceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Invoice',
      required: true,
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    paymentMethod: {
      type: String,
      enum: Object.values(constants.PAYMENT_METHOD),
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(constants.PAYMENT_STATUS),
      default: constants.PAYMENT_STATUS.PENDING,
    },
    transactionId: String,
    paymentDate: Date,
    notes: String,
  },
  {
    timestamps: true,
  }
);

paymentSchema.index({ invoiceId: 1 });
paymentSchema.index({ patientId: 1 });
paymentSchema.index({ status: 1 });

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
