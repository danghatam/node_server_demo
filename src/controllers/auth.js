'use strict';

import express from 'express';
import UserService from '../services/users';
const router = express.Router();

router.post('/login', (req, res, next) => {
  UserService.login(req.body).then( result => {
  	if(!result) return next(new Error('unauthorized.'));
  	else res.json({
  		success: true,
  	})
  }).catch(next);
});

router.get('/logout', (req, res, next) => {
  res.json({});
});

export default router;
