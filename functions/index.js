const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Configure nodemailer with your email service (Gmail in this case)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'enkysolutions2019@gmail.com',
    pass: process.env.EMAIL_PASSWORD // Set this in Firebase Functions config
  }
});

// Function to send email when a new product is submitted
exports.onProductSubmitted = functions.firestore
  .document('products/{productId}')
  .onCreate(async (snap, context) => {
    const product = snap.data();
    
    const mailOptions = {
      from: 'Enky Solutions <enkysolutions2019@gmail.com>',
      to: 'enkysolutions2019@gmail.com',
      subject: 'New Product Submission',
      html: `
        <h2>New Product Submitted for Review</h2>
        <p><strong>Product Name:</strong> ${product.name}</p>
        <p><strong>Price:</strong> KSh ${product.price}</p>
        <p><strong>Description:</strong> ${product.description}</p>
        <p><strong>Seller Phone:</strong> ${product.seller.phone}</p>
        <p><strong>Image:</strong> <a href="${product.image}">View Image</a></p>
        <p>Please review this submission in the admin panel.</p>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('New product submission email sent');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  });

// Function to send email when a product is approved
exports.onProductStatusChanged = functions.firestore
  .document('products/{productId}')
  .onUpdate(async (change, context) => {
    const beforeData = change.before.data();
    const afterData = change.after.data();

    // Only send email if status changed to approved
    if (beforeData.status !== 'approved' && afterData.status === 'approved') {
      const mailOptions = {
        from: 'Enky Solutions <enkysolutions2019@gmail.com>',
        to: 'enkysolutions2019@gmail.com',
        subject: 'Product Approved',
        html: `
          <h2>Product Has Been Approved</h2>
          <p><strong>Product Name:</strong> ${afterData.name}</p>
          <p><strong>Price:</strong> KSh ${afterData.price}</p>
          <p><strong>Description:</strong> ${afterData.description}</p>
          <p>The product is now live on the marketplace.</p>
        `
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log('Product approval email sent');
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }
  });