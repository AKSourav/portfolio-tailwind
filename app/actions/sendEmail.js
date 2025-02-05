'use server'

import nodemailer from 'nodemailer';

export async function sendEmail(formData) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  });

  const mailOptions = {
    from: formData.email,
    to: 'anupamks2001@gmail.com',
    subject: `Portfolio Contact from ${formData.name}`,
    text: `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
    `,
    html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${formData.name}</p>
<p><strong>Email:</strong> ${formData.email}</p>
<p><strong>Message:</strong> ${formData.message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
} 