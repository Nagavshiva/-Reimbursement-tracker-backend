
const mongoose = require('mongoose');

const reimbursementSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  person: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  invoiceId: {
    type: String,
    required: true,
  },
  approved: {
    type: Boolean,
    default: false,
  },
  rejected: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Reimbursement', reimbursementSchema);
