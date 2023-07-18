const Reimbursement = require('../models/Reimbursement');

// Create a reimbursement
exports.createReimbursement = async (req, res) => {
    try {
        const { type, date, person, amount, invoiceId } = req.body;

        // Check if a reimbursement with the same invoiceId already exists
        const existingReimbursement = await Reimbursement.findOne({ invoiceId });
        if (existingReimbursement) {
            return res.status(400).json({ message: 'Reimbursement with the same invoiceId already exists' });
        }

        const reimbursement = await Reimbursement.create({
            type,
            date,
            person,
            amount,
            invoiceId,
        });

        res.status(201).json(reimbursement);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}


// Get all reimbursements
exports.getAllReimbursements = async (req, res) => {
    try {
        const reimbursements = await Reimbursement.find();
        res.json(reimbursements);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

// Approve a reimbursement
exports.approveReimbursement = async (req, res) => {
    try {
        const reimbursement = await Reimbursement.findByIdAndUpdate(
            req.params.id,
            { $set: { approved: true, rejected: false } },
            { new: true }
        );
        res.json(reimbursement);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

// Reject a reimbursement
exports.rejectReimbursement = async (req, res) => {
    try {
        const reimbursement = await Reimbursement.findByIdAndUpdate(
            req.params.id,
            { $set: { approved: false, rejected: true } },
            { new: true }
        );
        res.json(reimbursement);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
