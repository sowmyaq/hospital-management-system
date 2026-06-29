const ROLES = {
  ADMIN: 'admin',
  DOCTOR: 'doctor',
  RECEPTIONIST: 'receptionist',
  PATIENT: 'patient',
};

const ROLE_PERMISSIONS = {
  admin: ['*'],
  doctor: [
    'view_patients',
    'view_appointments',
    'create_prescription',
    'view_medical_records',
    'create_medical_record',
  ],
  receptionist: [
    'view_appointments',
    'create_appointment',
    'cancel_appointment',
    'view_patients',
    'check_in_patient',
  ],
  patient: [
    'view_own_appointments',
    'book_appointment',
    'cancel_own_appointment',
    'view_own_medical_records',
    'view_prescriptions',
  ],
};

const APPOINTMENT_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
  RESCHEDULED: 'rescheduled',
  NO_SHOW: 'no-show',
};

const PRESCRIPTION_STATUS = {
  ACTIVE: 'active',
  COMPLETED: 'completed',
  DISCONTINUED: 'discontinued',
};

const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
  CANCELLED: 'cancelled',
};

const PAYMENT_METHOD = {
  CASH: 'cash',
  CARD: 'card',
  BANK_TRANSFER: 'bank_transfer',
  INSURANCE: 'insurance',
};

const MEDICINE_UNIT = {
  TAB: 'tab',
  CAPSULE: 'capsule',
  ML: 'ml',
  VIAL: 'vial',
  INJECTION: 'injection',
  SYRUP: 'syrup',
  CREAM: 'cream',
  OINTMENT: 'ointment',
};

const APPOINTMENT_TIME_SLOTS = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
];

export default {
  ROLES,
  ROLE_PERMISSIONS,
  APPOINTMENT_STATUS,
  PRESCRIPTION_STATUS,
  PAYMENT_STATUS,
  PAYMENT_METHOD,
  MEDICINE_UNIT,
  APPOINTMENT_TIME_SLOTS,
};
