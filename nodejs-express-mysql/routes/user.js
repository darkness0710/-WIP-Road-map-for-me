const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'List users', data: [] });
});

router.get('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Show user ${req.params.id}`, data: {} })
});

router.post('/', (req, res) => {
  res.status(200).json({ success: true, msg: `Update user ${req.params.id}`, data: {} })
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Delete user ${req.params.id}`, data: {} })
});

module.exports = router;
