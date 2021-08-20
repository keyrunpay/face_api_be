import mongoose from 'mongoose';
import { IFace } from '../../core/models/face';
const Face = mongoose.model<IFace>('Face');

export const addFace = async (payload: any) => {
  const { label, details } = payload;

  const newFace = new Face({
    label,
    details
  });

  await newFace.save();

  return { message: 'Face added successfully' };
};

export const readAll = async () => {
  let readAll = await Face.find({}, 'label details').lean();
  return readAll;
};
