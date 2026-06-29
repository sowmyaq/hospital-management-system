import mongoose from 'mongoose';
import constants from '../constants/index.js';

const medicineSchema = new mongoose.Schema(
  {
    medicineId: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: [true, 'Medicine name is required'],
      unique: true,
    },
    genericName: String,
    category: {
      type: String,
      required: true,
    },
    description: String,
    manufacturer: String,
    dosage: String,
    unit: {
      type: String,
      enum: Object.values(constants.MEDICINE_UNIT),
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    minimumStockLevel: {
      type: Number,
      default: 10,
    },
    expiryDate: Date,
    batchNumber: String,
    sideEffects: [String],
    contraindications: [String],
    storageInstructions: String,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

medicineSchema.index({ name: 1 });
medicineSchema.index({ category: 1 });
medicineSchema.index({ stock: 1 });

const Medicine = mongoose.model('Medicine', medicineSchema);

export default Medicine;
