import mongoose from 'mongoose';

const auditLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    action: {
      type: String,
      required: true,
    },
    entity: String,
    entityId: mongoose.Schema.Types.ObjectId,
    oldValues: mongoose.Schema.Types.Mixed,
    newValues: mongoose.Schema.Types.Mixed,
    ipAddress: String,
    userAgent: String,
  },
  {
    timestamps: true,
  }
);

auditLogSchema.index({ userId: 1 });
auditLogSchema.index({ entity: 1 });
auditLogSchema.index({ createdAt: 1 });

const AuditLog = mongoose.model('AuditLog', auditLogSchema);

export default AuditLog;
