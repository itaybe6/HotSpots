const express = require('express');
const router = express.Router();
const { verifyBusiness, login, getPendingUsers, updateUserStatus , addEvent } = require('../controller/user');
const multer = require('multer');
const adminAuth = require('../middleware/adminAuth'); // ייבוא ה-Middleware

// הגדרת multer (במידה ואתה צריך להעלות קבצים)
const upload = multer({ dest: 'uploads/' });

router.post(
    '/verify-business',
    upload.fields([
      { name: 'businessDoc', maxCount: 1 },
      { name: 'idDoc', maxCount: 1 },
    ]),
    verifyBusiness
  );
router.post('/login', login);

router.get('/admin/pending-users', adminAuth, getPendingUsers);

router.post('/admin/update-status/:id',adminAuth, updateUserStatus);

router.post('/add-event', addEvent);

module.exports = router;
