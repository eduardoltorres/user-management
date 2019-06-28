const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.User.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post('/', (req, res) => {
  db.User.create(req.body)
    .then(newUser => {
      res.send(newUser);
    })
    .catch(err => res.send(err));
});

router.get('/:userId', (req, res) => {
  db.User.findById(req.params.userId)
    .then(foundUser => {
      res.send(foundUser);
    })
    .catch(err => res.send(err));
});

module.exports = router;
