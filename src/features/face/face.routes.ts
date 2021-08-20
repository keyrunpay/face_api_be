import { Router } from 'express';
import { body } from 'express-validator';
import checkValidation from '../../core/handlers/checkValidation';
import * as controller from './face.controller';
const router = Router();

router.post(
  '/',
  body('label', 'Label is required').notEmpty(),
  body('details', 'Details is required').notEmpty(),
  checkValidation,
  controller.addFace
);

router.get('/', controller.readAllFace);

export default router;
