const mongoose = require('mongoose'); // Add this line at the top

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    
  },
  enrollmentNumber: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,  // Changed from Number to String to match form input
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  department: {
    type: String,
    required: true
  },
  yearOfStudy: {
    type: String,
    required: true
  },
  registeredAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Student', studentSchema);