import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema(
  {
    recordId: {
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
    appointmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment',
    },
    recordType: {
      type: String,
      enum: ['prescription', 'lab_report', 'medical_test', 'diagnosis', 'discharge_summary'],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: String,
    findings: String,
    treatment: String,
    attachments: [{
      filename: String,
      url: String,
      uploadedAt: Date,
    }],
    isConfidential: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

medicalRecordSchema.index({ patientId: 1 });
medicalRecordSchema.index({ doctorId: 1 });
medicalRecordSchema.index({ recordType: 1 });

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);

export default MedicalRecord;
