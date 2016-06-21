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

});

router.post('/', (req, res, next) => {

});

router.put('/:id', (req, res, next) => {

});

router.delete('/:id', (req, res, next) => {

});
