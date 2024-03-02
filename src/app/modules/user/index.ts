import express from 'express';
const router = express.Router();

import userController from './user.controller';
const controller = new userController();

router.get('/', controller.getData);
router.post('/signup', controller.signUp);
router.post('/recursion', controller.recursion);

export default router;