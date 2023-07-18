const express = require('express');
const router = express.Router();
const reimbursementController = require("../controllers/reimbursements")

// get all
router.get('/',reimbursementController.getAllReimbursements)
// Route for creating a reimbursement
router.post('/create',reimbursementController.createReimbursement);

// Route for approving a reimbursement
router.put('/:id/approve', reimbursementController.approveReimbursement);

// Route for rejecting a reimbursement
router.put('/:id/reject', reimbursementController.rejectReimbursement);

module.exports = router;