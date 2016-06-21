'use strict';

import express from 'express';
import UserService from '../services/users';
const router = express.Router();

router.get('/', (req, res, next) => {
  UserService.list().then( data => {
    res.json({
      success: true,
      data: data
    });
  }).catch(next);
});

router.get('/:id', (req, res, next) => {
  res.json({
    success: true
  });
});

router.post('/', (req, res, next) => {
  res.json({
    success: true
  });
});

router.put('/:id', (req, res, next) => {
  res.json({
    success: true
  });
});

router.delete('/:id', (req, res, next) => {
  res.json({
    success: true
  });
});

export default router;
