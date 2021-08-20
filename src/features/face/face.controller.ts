import { Request, Response } from 'express';
import * as service from './face.service';

export const addFace = async (
  req: Request,
  res: Response
) => {
  const { label, details } = req.body;
  const response = await service.addFace({ label, details });
  res.json(response);
};

export const readAllFace = async (
  _: Request,
  res: Response
) => {
  const response = await service.readAll();
  res.json(response);
};
