const express = require('express');
const router = express.Router();
const Student = require('./models/Student.js'); // Import your Student model

// Home route - renders index.ejs
router.get('/', (req, res) => {
    res.render('index');
});


router.get('/register', (req, res) => {
    res.render('registration');
});


router.post('/submit-registration', async (req, res) => {
    const { fullName, enrollmentNumber, phone, email, department, year } = req.body;
    const errors = [];

    // Basic validations
    if (!email.includes('@')) {
        errors.push('Email must contain @ symbol');
    }

    if (phone && !/^\d+$/.test(phone)) {
        errors.push('Phone number can only contain digits');
    }

    if (errors.length > 0) {
        return res.render('registration', { 
            errors,
            formData: req.body
        });
    }

    try {
        
        const newStudent = new Student({
            fullName,
            enrollmentNumber,
            phone,
            email,
            department,
            yearOfStudy: year
        });

        
        await newStudent.save();
        
        
        res.redirect('/success');
    } catch (err) {
        console.error('Error saving to MongoDB:', err);
        
    }
});


router.get('/success', (req, res) => {
    res.render('successful');
});

module.exports = router;