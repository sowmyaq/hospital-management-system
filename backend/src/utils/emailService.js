import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async (to, subject, html) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent:', result.response);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

const sendAppointmentConfirmation = async (email, appointment) => {
  const html = `
    <div style="font-family: Arial, sans-serif;">
      <h2>Appointment Confirmation</h2>
      <p>Dear ${appointment.patientName},</p>
      <p>Your appointment has been confirmed.</p>
      <div style="background-color: #f0f0f0; padding: 10px; margin: 10px 0;">
        <p><strong>Doctor:</strong> ${appointment.doctorName}</p>
        <p><strong>Date:</strong> ${new Date(appointment.date).toLocaleDateString()}</p>
        <p><strong>Time:</strong> ${appointment.time}</p>
        <p><strong>Location:</strong> ${appointment.location || 'Main Hospital'}</p>
      </div>
      <p>Please arrive 10 minutes before your scheduled time.</p>
      <p>If you need to cancel or reschedule, please contact us at least 24 hours in advance.</p>
      <p>Best regards,<br/>Hospital Management System</p>
    </div>
  `;
  return sendEmail(email, 'Appointment Confirmation', html);
};

const sendPasswordResetEmail = async (email, resetLink) => {
  const html = `
    <div style="font-family: Arial, sans-serif;">
      <h2>Password Reset Request</h2>
      <p>We received a request to reset your password.</p>
      <p>Click the link below to reset your password:</p>
      <a href="${resetLink}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
        Reset Password
      </a>
      <p>This link will expire in 1 hour.</p>
      <p>If you didn't request this, please ignore this email.</p>
      <p>Best regards,<br/>Hospital Management System</p>
    </div>
  `;
  return sendEmail(email, 'Password Reset Request', html);
};

const sendWelcomeEmail = async (email, userName) => {
  const html = `
    <div style="font-family: Arial, sans-serif;">
      <h2>Welcome to Hospital Management System</h2>
      <p>Dear ${userName},</p>
      <p>Your account has been created successfully.</p>
      <p>You can now log in to your account and access all features.</p>
      <p>If you have any questions, feel free to contact our support team.</p>
      <p>Best regards,<br/>Hospital Management System Team</p>
    </div>
  `;
  return sendEmail(email, 'Welcome to Hospital Management System', html);
};

export {
  sendEmail,
  sendAppointmentConfirmation,
  sendPasswordResetEmail,
  sendWelcomeEmail,
};
