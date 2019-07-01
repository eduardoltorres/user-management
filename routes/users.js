const express = require('express');
const router = express.Router();
let User = require('../models/user');

router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.send(err));
});

router.post('/', (req, res) => {
  const { name, email, team, isAdmin } = req.body;
  const newUser = new User({ name, email, team, isAdmin });

  newUser
    .save()
    .then(() => res.json(newUser))
    .catch(err => res.send(err));
});

router.get('/:userId', (req, res) => {
  User.findById(req.params.userId)
    .then(user => res.json(user))
    .catch(err => res.send(err));
});

router.delete('/:userId', (req, res) => {
  User.findByIdAndDelete(req.params.userId)
    .then(user => res.json(user))
    .catch(err => res.send(err));
});

module.exports = router;
